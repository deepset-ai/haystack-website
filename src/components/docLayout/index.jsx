import React, { useState, useEffect, useRef } from "react";
import Menu from "../menu";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./index.scss";
import { GithubLogo } from "../../images/icon/GitHub-Mark-32px.png"; 
import thumbnail from "../../images/haystack_logo_blue_banner_social.png"; 
import SEO from "../../components/seo"

export default (props) => {
  const {
    language,
    children,
    locale,
    menuList,
    id,
    versions,
    version,
    headings,
    current,
    wrapperClass = "doc-wrapper",
    isBenchMark = false,
    showDoc = true,
  } = props;
  let formatHeadings = null;

  formatHeadings =
    headings &&
    headings.reduce((pre, cur) => {
      const copyCur = JSON.parse(JSON.stringify(cur));
      const preHead = pre[pre.length - 1];
      if (preHead && preHead.depth < cur.depth 
        && pre[pre.length-1].children
        && pre[pre.length-1].children.length > 0
        && pre[pre.length-1].children[pre[pre.length-1].children.length-1].children !== undefined) {
          pre[pre.length - 1].children[pre[pre.length - 1].children.length-1].children.push(cur);
      } else if (pre.length > 0 
        && pre[pre.length-1].children
        && pre[pre.length-1].children.length > 0
      && pre[pre.length-1].children[pre[pre.length-1].children.length-1].depth <  cur.depth) {
        pre[pre.length-1].children[pre[pre.length-1].children.length-1].children = [];
      } else if (preHead && preHead.depth < cur.depth) {
        pre[pre.length - 1].children.push(cur);
        pre[pre.length - 1].children[pre[pre.length-1].children.length-1].children = [];
      } else {
        copyCur.children = [];
        pre = [...pre, copyCur];
      }
      return pre;
    }, []);
  const [hash, setHash] = useState(null);
  const docContainer = useRef(null);
  const [showToTopButton, setShowToTopButton] = useState(false);

  // star reference
  const star = useRef(null);
  useEffect(() => {
    if (!window) {
      return;
    }
    if (!star.current) {
      return;
    }
    const repoUrl = `https://api.github.com/repos/deepset-ai/haystack`;
    let latest = window.localStorage.getItem("deepset-ai.io.stargazers");
    const latestFetchTime = window.localStorage.getItem(
      "deepset-ai.io.stargazers_fetch_time"
    );

    if (
      !latestFetchTime ||
      Date.now() - latestFetchTime > 60000 * 60 ||
      !latest
    ) {
      // get
      fetch(repoUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            if (data.stargazers_count >= latest) {
              window.localStorage.setItem(
                "deepset-ai.io.stargazers",
                data.stargazers_count
              );
              window.localStorage.setItem(
                "deepset-ai.io.stargazers_fetch_time",
                Date.now()
              );
              star.current.innerHTML = `Github ${data.stargazers_count} stars`;
            }
          }
        });
    } else {
      star.current.innerHTML = `Github ${latest} stars`;
    }
  }, []);

  useEffect(() => {
    const cb = () => {
      const wrapper = document.querySelector("html");

      const showButton = wrapper.scrollTop !== 0;
      setShowToTopButton(showButton);
    };

    window.addEventListener("scroll", () => {
      cb();
    });

    return window.removeEventListener("scroll", () => {
      cb();
    });
  }, []);

  const generateAnchorMenu = (headings, className, anchors = []) => {
    return headings.map((v) => {
      /* eslint-disable-next-line */
      const normalVal = v.value.replace(/[.｜,｜\/｜\'｜\?｜？｜、|，|\(|\)|:|&|!|;|:]/g, "");
      let anchor = normalVal.split(" ").join("-");
      if (anchors.includes(anchor)) {
        let filteredAnchors = anchors.filter(element => element === anchor);
        anchor = `${anchor}-${filteredAnchors.length}`
        anchors.push(anchor);
      } else {
        anchors.push(anchor);
      }
      let childDom = null;
      let childchildDom = null;
      if (v.children && v.children.length && v.children[0].depth === 2) {
        childDom = generateAnchorMenu(v.children, "child-item", anchors);
      } else if (v.children && v.children.length && v.children[0].depth === 4) {
        childchildDom = generateAnchorMenu(v.children, "child-child-item", anchors);
      }
      
      return (
        <div className={`item ${className}`} key={v.value}>
          <a
            href={`#${anchor}`}
            title={v.value}
            className={anchor === hash ? "active" : ""}
            onClick={(e) => onAnchorClick(e, anchor)}
          >
            {v.value}
          </a>
          {childDom}
          {childchildDom}
        </div>
      );
    });
  };

  const onAnchorClick = (event, anchor) => {
    event.stopPropagation();
    event.preventDefault();

    setHash(anchor);

    const element = document.querySelector(`#${anchor}`);
    const offset = 62;

    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
    });
  };

  const onToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <SEO title="Haystack Docs" image={thumbnail} pathname="/docs/intromd" />
      <Header
        language={language}
        current={current}
        locale={locale}
        showDoc={showDoc}
      />
      <main className={wrapperClass}>
        <Menu
          menuList={menuList}
          versions={versions}
          activeDoc={id}
          version={version}
          locale={locale}
          isBenchMark={isBenchMark}
        ></Menu>
        <div
          className={`inner-container ${isBenchMark ? "fullwidth" : ""}`}
          ref={docContainer}
        >
          {children}
          {!isBenchMark && (
            <Footer locale={locale} style={{ background: "#fff" }}></Footer>
          )}
        </div>
        {formatHeadings && !isBenchMark && (
          <div className="anchor-wrapper">
            <section>
              {generateAnchorMenu(formatHeadings, "parent-item")} 
              <div className="button-container">
                <a
                  ref={star}
                  className="btn"
                  href="http://github.com/deepset-ai/haystack"
                >
                  <img src={GithubLogo} alt="Github"></img>
                  788 stars
                </a>
              </div>
            </section>
          </div>
        )}

        {showToTopButton && (
          <div
            className="button-to-top"
            role="button"
            onClick={onToTopClick}
            onKeyDown={onToTopClick}
            tabIndex={0}
          >
            <svg
              width="16"
              height="16"
              focusable="false"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="svg-inline--fa fa-arrow-to-top fa-w-12 fa-2x"
            >
              <path
                fill="currentColor"
                d="M24 32h336c13.3 0 24 10.7 24 24v24c0 13.3-10.7 24-24 24H24C10.7 104 0 93.3 0 80V56c0-13.3 10.7-24 24-24zm66.4 280.5l65.6-65.6V456c0 13.3 10.7 24 24 24h24c13.3 0 24-10.7 24-24V246.9l65.6 65.6c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L209 126.1c-9.4-9.4-24.6-9.4-33.9 0L39.5 261.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0z"
              ></path>
            </svg>
          </div>
        )}
      </main>
    </div>
  );
};