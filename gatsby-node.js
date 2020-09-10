const path = require("path");
const fs = require("fs");
const locales = require("./src/consts/locales");
const express = require("express");
const env = process.env.IS_PREVIEW;
console.log(env);

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"));
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise((resolve) => {
    deletePage(page);
    Object.keys(locales).map((lang) => {
      let localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path;
        
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
          //newestVersion,
        },
      });
    });
    resolve();
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const docTemplate = path.resolve(`src/templates/docTemplate.js`);

  // isMenu outLink can be add when need to use
  return graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(?:site)/" } }
      ) {
        edges {
          node {
            headings {
              value
              depth
            }
            frontmatter {
              id
            }
            fileAbsolutePath
            html
          }
        }
      }
      allFile(filter: { relativeDirectory: { regex: "/(?:menuStructure)/" } }) {
        edges {
          node {
            absolutePath
            childMenuStructureJson {
              menuList {
                id
                title
                label1
                label2
                label3
                order
                isMenu
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // get all menuStructures
    const allMenus = result.data.allFile.edges.map(
      ({ node: { absolutePath, childMenuStructureJson } }) => {
        let lang = "en";
        //const version = findVersion(absolutePath) || "master";
        const menuStructureList =
          (childMenuStructureJson && [...childMenuStructureJson.menuList]) ||
          [];
        const menuList = [...menuStructureList];
        return {
          lang,
          menuList,
          absolutePath,
        };
      }
    );

    // filter useless md file blog has't version
    const legalMd = result.data.allMarkdownRemark.edges;/*.filter(
      ({ node: { fileAbsolutePath, frontmatter } }) =>
        (!!findVersion(fileAbsolutePath) ||
          fileAbsolutePath.includes("/blog/zh-CN") ||
          (fileAbsolutePath.includes("/docs/versions/master/preview/") &&
            env === "preview") ||
          fileAbsolutePath.includes("/docs/versions/benchmarks/")) &&
        frontmatter.id
    );*/

    // we generate path by menu structure
    const generatePath = (
      id,
      lang,
      needLocal = true,
    ) => {
      const findMenu = allMenus.find(
        (v) => v.lang === lang //&& v.version === version
      );

      const menuList = findMenu ? findMenu.menuList : [];
      const doc = menuList.find((v) => v.id === id);
      let localizedPath = `${lang}/docs/`;
      return needLocal ? `${localizedPath}${id}` : `${id}`;
    };

    const defaultLang = Object.keys(locales).find(
      (lang) => locales[lang].default
    );

    // -----  for global search begin -----
    const flatten = (arr) =>
      arr.map(({ node: { frontmatter, fileAbsolutePath, headings } }) => {
        const fileLang = "en";

        //const version = findVersion(fileAbsolutePath) || "master";
        const headingVals = headings.map((v) => v.value);
        return {
          ...frontmatter,
          //fileLang,
          version,
          path: generatePath(
            frontmatter.id,
            fileLang,
            false
          ),
          // the value we need compare with search query
          values: [...headingVals, frontmatter.id],
        };
      });

    return legalMd.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      const fileId = node.frontmatter.id;

      const fileLang = "en";

      let editPath = fileAbsolutePath.split(
        fileLang === "en" ? "/en/" : "/zh-CN/"
      )[1];
      editPath = editPath.replace(".md", ".rst");
      
      const localizedPath = generatePath(
        fileId,
        fileLang,
        true
      );
      const newHtml = node.html;

      //  normal pages
      isBlog=false;
      return createPage({
        path: localizedPath,
        component: docTemplate,
        context: {
          locale: fileLang,
          old: fileId,
          headings: node.headings.filter((v) => v.depth < 4 && v.depth >= 1),
          fileAbsolutePath,
          editPath,
          allMenus,
          newHtml,
        }, // additional data can be passed via context
      });
    });
  });
};

const checkIsblog = (path) => path.includes("blog");
const checkIsBenchmark = (path) => path.includes("benchmarks");