const path = require("path");
const fs = require("fs");
const ReadVersionJson = require("./walkFile");
const GenerateOpenAPI = require("./openapi-aggregate");
const locales = require("./src/consts/locales");
const express = require("express");
const env = "latest";
const getNewestVersion = (versionInfo) => {
  const keys = Object.keys(versionInfo).filter(
    (v) =>
      v !== "master" && (versionInfo[v].released === "yes" || env === "latest")
  );
  return keys.reduce((pre, cur) => {
    const curVersion = cur
      .substring(1)
      .split(".")
      .map((v) => Number(v));
    const preVersion = pre
      .substring(1)
      .split(".")
      .map((v) => Number(v));

    if (curVersion[0] !== preVersion[0]) {
      pre = curVersion[0] < preVersion[0] ? pre : cur;
    } else if (curVersion[1] !== preVersion[1]) {
      pre = curVersion[1] < preVersion[1] ? pre : cur;
    } else if (curVersion[2] !== preVersion[2]) {
      pre = curVersion[2] < preVersion[2] ? pre : cur;
    } else {
      pre = cur;
    }

    return pre;
  }, "v0.0.0");
};

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"));
};


// the version is same for different lang, so we only need one
const DOC_ROOT = "src/pages/docs/versions";
const versionInfo = ReadVersionJson(DOC_ROOT);
const newestVersion = getNewestVersion(versionInfo);
if (env === "latest") {
  versionInfo.preview = {
    version: "latest",
    released: "no",
  };
}
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
          newestVersion,
        },
      });
    });
    resolve();
  });
};

exports.sourceNodes = ({ actions }) => {

  const { createNode } = actions;

  const nodes = GenerateOpenAPI('https://api.haystack-hub.com/openapi.json');
  console.log(nodes);

  nodes.forEach(n => {
    createNode(n);
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const docTemplate = path.resolve(`src/templates/docTemplate.js`);

  // isMenu outLink can be add when need to use
  const docsCore = graphql(`
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
      allFile(filter: { absolutePath: { regex: "/(?:en/menuStructure)/" } }) {
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

    const findVersion = (str) => {
      const regx = /versions\/master\/([v\d\.]*)/;
      const match = str.match(regx);
      return match
        ? match[1]
          ? match[1]
          : env === "latest" && str.includes("latest")
          ? "latest"
          : match[1]
        : "";
    };
    
    // get all menuStructures
    const allMenus = result.data.allFile.edges.map(
      ({ node: { absolutePath, childMenuStructureJson } }) => {
        let lang = "en";
        const version = findVersion(absolutePath) || "master";
        const menuStructureList =
          (childMenuStructureJson && [...childMenuStructureJson.menuList]) ||
          [];
        const menuList = [...menuStructureList];
        return {
          lang,
          version,
          menuList,
          absolutePath,
        };
      }
    );

    // filter useless md file blog has't version
    const legalMd = result.data.allMarkdownRemark.edges;

    // we generate path by menu structure
    const generatePath = (
      id,
      lang,
      version,
      needLocal = true,
    ) => {
      const findMenu = allMenus.find(
        (v) => v.lang === lang && v.version === version
      );

      const menuList = findMenu ? findMenu.menuList : [];
      const doc = menuList.find((v) => v.id === id);
      let localizedPath = "";
      if (version && version !== "master") {
        localizedPath =
          lang === defaultLang
            ? `/docs/${version}/`
            : `${lang}/docs/${version}/`;
      } else {
        // for master branch version -> false
        localizedPath = lang === defaultLang ? `/docs/` : `${lang}/docs/`;
      }

      return needLocal ? `${localizedPath}${id}` : `${id}`;
    };

    const defaultLang = Object.keys(locales).find(
      (lang) => locales[lang].default
    );

    // -----  for global search begin -----
    const flatten = (arr) =>
      arr.map(({ node: { frontmatter, fileAbsolutePath, headings } }) => {
        const fileLang = "en";

        const version = findVersion(fileAbsolutePath) || "master";
        const headingVals = headings.map((v) => v.value);
        return {
          ...frontmatter,
          //fileLang,
          version,
          path: generatePath(
            frontmatter.id,
            fileLang,
            version,
            false
          ),
          // the value we need compare with search query
          values: [...headingVals, frontmatter.id],
        };
      });

    // get all version
    const versions = new Set();
    legalMd.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      const version = findVersion(fileAbsolutePath);

      // released: no -> not show , yes -> show
      // when env is latest ignore released
      if (version != '') {
        versions.add(version);
      }
    });

    legalMd.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      const fileId = node.frontmatter.id;
      let version = findVersion(fileAbsolutePath);

      const fileLang = "en";

      let editPath = fileAbsolutePath.split(
        fileLang === "en" ? "/en/" : "/zh-CN/"
      )[1];
      
      const localizedPath = generatePath(
        fileId,
        fileLang,
        version,
        true
      );
      const newHtml = node.html;

      // the newest doc version is master so we need to make route without version.
      // for easy link to the newest doc
      if (version === newestVersion) {
        const masterPath = generatePath(fileId, fileLang, "master");
        createPage({
          path: masterPath,
          component: docTemplate,
          context: {
            locale: fileLang,
            version: newestVersion, // get master version
            versions: Array.from(versions),
            newestVersion,
            old: fileId,
            headings: node.headings.filter((v) => v.depth < 4 && v.depth >= 1),
            fileAbsolutePath,
            isBlog,
            editPath,
            allMenus,
            isDocAPI: false,
            isDocHub: false,
            newHtml,
          }, // additional data can be passed via context
        });
      }

      //  normal pages
      isBlog=false;
      createPage({
        path: localizedPath,
        component: docTemplate,
        context: {
          locale: fileLang,
          version: version,
          versions: Array.from(versions),
          old: fileId,
          headings: node.headings.filter((v) => v.depth < 4 && v.depth >= 1),
          fileAbsolutePath,
          newestVersion,
          editPath,
          allMenus,
          newHtml,
        }, // additional data can be passed via context
      });
    });
  });

  const docsHub = graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(?:docs_hub)/" } }
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
      allFile(filter: { absolutePath: { regex: "/(?:docs_hub/menuStructure)/" } }) {
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
    const legalMd = result.data.allMarkdownRemark.edges;

    // we generate path by menu structure
    const generatePath = (
      id,
      lang,
      needLocal = true,
    ) => {

      localizedPath = lang === defaultLang ? `/docs_hub/` : `${lang}/docs_hub/`;

      return needLocal ? `${localizedPath}${id}` : `${id}`;
    };

    const defaultLang = Object.keys(locales).find(
      (lang) => locales[lang].default
    );

    legalMd.forEach(({ node }) => {
      const fileAbsolutePath = node.fileAbsolutePath;
      const fileId = node.frontmatter.id;

      const fileLang = "en";

      let editPath = fileAbsolutePath.split(
        fileLang === "en" ? "/en/" : "/zh-CN/"
      )[1];
      
      const localizedPath = generatePath(
        fileId,
        fileLang,
        true
      );
      const newHtml = node.html;

      //  normal pages
      isBlog=false;
      createPage({
        path: localizedPath,
        component: docTemplate,
        context: {
          locale: fileLang,
          old: fileId,
          headings: node.headings.filter((v) => v.depth < 4 && v.depth >= 1),
          fileAbsolutePath,
          editPath,
          allMenus,
          isDocAPI: false,
          isDocHub: true,
          newHtml,
        }, // additional data can be passed via context
      });
    });
  });
  

  /*const docsAPI = graphql(`
      {
        allOpenApiSpec {
          edges {
            node {
              id
              name
            }
          }
        }
        allFile(filter: { absolutePath: { regex: "/(?:docs_hub/menuStructure)/" } }) {
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
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      // get all menuStructures
    const allMenus = result.data.allFile.edges.map(
      ({ node: { absolutePath, childMenuStructureJson } }) => {
        let lang = "en";
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

      result.data.allOpenApiSpec.edges.map(({ node }) => {

        const fileLang = "en";
        createPage({
          path: `docs_api/${node.name}`,
          component: docTemplate,
          context: {
            locale: fileLang,
            old: node.id,
            allMenus,
            isDocAPI: true,
            isDocHub: false,
          }, // additional data can be passed via context
        });
      });
    });*/

  // Return a Promise which would wait for both the queries to resolve
	return Promise.all([docsCore, docsHub, /*docsAPI*/]);
};



const checkIsblog = (path) => path.includes("blog");
const checkIsBenchmark = (path) => path.includes("benchmarks");