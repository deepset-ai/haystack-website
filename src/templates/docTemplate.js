import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Layout from "../components/docLayout";
import { graphql } from "gatsby";
import hljs from "highlight.js";
import ReactTooltip from "react-tooltip";
import "highlight.js/styles/github.css";
import "./docTemplate.scss";
import { useMobileScreen } from "../hooks";
import Code from "../components/code/code";
import QueryModal from "../components/query-modal/query-modal.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import Link from 'gatsby-link'
import groupBy from 'lodash.groupby'
import SpecInformation from '../components/spec/SpecInformation'
import SpecPaths from '../components/spec/SpecPaths'
import g from 'glamorous'

function sortVersions(a, b) {
  const [v1, s1, m1] = a.split(".");
  const [v2, s2, m2] = b.split(".");
  const aValue = v1.split("")[1] * 100 + s1 * 10 + m1 * 1;
  const bValue = v2.split("")[1] * 100 + s2 * 10 + m2 * 1;

  if (aValue > bValue) {
    return -1;
  }
  if (aValue === bValue) {
    return 0;
  }
  if (aValue < bValue) {
    return 1;
  }
}

export default function Template({
  data,
  pageContext, // this prop will be injected by the GraphQL query below.
}) {
  let {
    locale,
    version = "",
    versions = [],
    headings = [],
    allMenus,
    isDocAPI = false,
    isDocHub = false,
    newHtml,
    editPath,
  } = pageContext;
  versions = versions.sort(sortVersions);
  const screenWidth = useMobileScreen();

  let api = null;
  let paths = null;
  let pathGroups = null;
  let backStyle = null;

  if(isDocAPI) {
    api = data.openApiSpec;
    paths = api.childrenOpenApiSpecPath;
    pathGroups = groupBy(paths, p => p.tag);
    backStyle = {
      marginBottom: '1rem',
    };
  }
  
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".query-button-panel").forEach((panel) => {
      const codeWrapper = panel.previousElementSibling;
      codeWrapper.classList.add("query-button-code");

      const querySnippet = codeWrapper.querySelector("code").textContent;
      const formatCode = getRequestAsCURL(querySnippet);

      panel.addEventListener("click", (e) => {
        const funcMap = {
          copy: handleCopy,
          console: handleOpenConsole,
          // setting wrapper
          setting: handleSetting,
          // setting icon
          "fa-cog": handleSetting,
        };

        const classList = e.target.classList;

        Object.keys(funcMap).forEach((key) => {
          if (classList.contains(key)) {
            funcMap[key](formatCode);
          }
        });
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = (code) => {
    copyToClipboard(code);
  };
  const handleOpenConsole = () => {
    console.log("open console");
  };
  const handleSetting = () => setShowModal(true);

  useEffect(() => {
    const filterWrappers = document.querySelectorAll(".filter");
    const allFilters = [];
    let firstHash = "";
    filterWrappers.forEach((fw) => {
      const fs = fw.querySelectorAll("a");

      fs.forEach((f) => {
        if (!firstHash) {
          firstHash = f.hash;
        }
        allFilters.push(f);
      });
    });
    const allContents = document.querySelectorAll(`[class*="filter-"]`);

    const clickEventHandler = (targetHash) => {
      const hash = targetHash;
      const currentFilters = allFilters.filter((f) => f.hash === hash);
      allFilters.forEach((f) => f.classList.toggle("active", false));
      currentFilters.forEach((cf) => cf.classList.toggle("active", true));
      allContents.forEach((c) => c.classList.toggle("active", false));
      const contents = document.querySelectorAll(
        `.filter-${hash.replace("#", "")}`
      );
      contents.forEach((c) => c.classList.toggle("active", true));
    };
    filterWrappers.forEach((w) => {
      w.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
          clickEventHandler(e.target.hash);
        }
      });
    });

    if (window) {
      const windowHash = window.location.hash || firstHash;
      if (windowHash) {
        clickEventHandler(windowHash);
      }
      window.history.pushState(null, null, windowHash);

      window.addEventListener(
        "hashchange",
        () => {
          clickEventHandler(window.location.hash);
        },
        false
      );
    }
  }, []);

  useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);

      const html = block.innerHTML;
      const content = block.textContent;
      const code = <Code html={html} content={content} locale={locale} />;
      ReactDOM.render(code, block);
    });

    return () => {
      document.querySelectorAll("pre code").forEach((block) => {
        ReactDOM.unmountComponentAtNode(block);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (screenWidth > 1000) return;
    const cb = (e) => {
      if (e.target.dataset.tip) {
        ReactTooltip.show(e.target);
      }
    };
    window.addEventListener("click", cb);
    return () => {
      window.removeEventListener("click", cb);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data.allFile.edges[0]) {
    return null;
  }

  const layout = data.allFile.edges[0]
    ? data.allFile.edges[0].node.childLayoutJson.layout
    : {};
  const menuList = allMenus.find(
    (v) =>
      v.absolutePath.includes(version) &&
      locale === v.lang
  );
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  let { frontmatter } = markdownRemark;
  const nav = {
    current: "doc",
  };
  const idRegex = /id=".*?"/g;
  if (locale === "cn") {
    newHtml = newHtml.replace(idRegex, (match) =>
      // eslint-disable-next-line
      match.replace(/[？|、|，]/g, "")
    );
  }

  const getRequestAsCURL = (code) => {
    const [header, ...data] = code.split("\n");
    const [method, url] = header.split(" ");
    const queryBody = data.join("\n");

    return `curl -X ${method} "http://localhost:8000${url}" -H 'Content-Type: application/json' -d'\n${queryBody}'`;
  };

  const copyToClipboard = (content) => {
    const el = document.createElement(`textarea`);
    el.value = content;
    el.setAttribute(`readonly`, ``);
    el.style.position = `absolute`;
    el.style.left = `-9999px`;
    document.body.appendChild(el);
    el.select();
    document.execCommand(`copy`);
    document.body.removeChild(el);
  };
  const onOverlayClick = () => setShowModal(false);

  return (
    <Layout
      language={layout}
      locale={locale}
      nav={nav}
      current="doc"
      pageContext={pageContext}
      menuList={menuList}
      version={version}
      headings={headings.filter((h, i) => i > 0)}
      versions={versions}
      id={frontmatter.id}
      showDoc={false}
      isDocAPI={isDocAPI}
      isDocHub={isDocHub}
    >
          <div className="doc-post-container">
          {isDocAPI ? (
            <div>
              <SpecInformation
                title={api.title}
                version={api.version}
                description={api.description}
              />
              {Object.keys(pathGroups).map(t => (
                <SpecPaths key={t} tag={t} paths={pathGroups[t]} />
              ))}
            </div>
            ) : (
              <div className="doc-post">
                <div
                  className="doc-post-content"
                  dangerouslySetInnerHTML={{ __html: newHtml }}
                />
                <ReactTooltip
                  type="info"
                  globalEventOff="click"
                  className="md-tooltip"
                />
                {!(isDocHub) ? (
                <a
                    className="edit-page-link btn"
                    href={`https://github.com/deepset-ai/haystack/tree/master/docs/_src/${editPath}`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={faEdit}/>
                    Edit
                  </a>
                  ) : null}
              </div>
              )}
            </div>
      

      {showModal ? (
        <div>
          <div
            className="overlay"
            tabIndex="0"
            role="button"
            aria-label="close dialog"
            onKeyDown={onOverlayClick}
            onClick={onOverlayClick}
          ></div>
          <QueryModal locale={locale} setShowModal={setShowModal} />
        </div>
      ) : null}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($locale: String, $fileAbsolutePath: String, $id: String) {
    markdownRemark(
      fileAbsolutePath: { eq: $fileAbsolutePath }
    ) {
      frontmatter {
        id
        title
      }
    }
    allFile(
      filter: {
        name: { eq: $locale }
        relativeDirectory: { regex: "/(?:layout)/" }
      }
    ) {
      edges {
        node {
          relativeDirectory
          
          childLayoutJson {
            layout {
              header {
                quick
                benchmarks
                why
                gui
                tutorials
                solution
                about
                doc
                blog
                try
                loading
                noresult
                tutorial
                search
                bootcamp
              }
            }
          }
        }
      }
    }
    openApiSpec(id: { eq: $id }) {
      version
      title
      description
      childrenOpenApiSpecPath {
        name
        verb
        summary
        description
        fullPath
        parameters {
          name
          in
          description
          required
        }
        tag
        childrenOpenApiSpecResponse {
          id
          statusCode
          description
        }
      }
    }
  }
`;