import React, { useEffect, useState, useRef } from "react";
import LocalizeLink from "../localizedLink/localizedLink";
import VersionSelector from "../selector";
import { useMobileScreen } from "../../hooks";
import "./index.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable */
const findItem = (key, value, arr) => {
  let find = undefined;
  arr.forEach((v) => {
    if (find) return;
    // because of tab id like: xxx-cpu
    // we only need string before "-" to compare
    // value already split with "-"
    const target = v[key].split("-")[0];
    if (target === value) {
      find = v;
    } else if (v.children && v.children.length) {
      find = findItem(key, value, v.children);
    }
  });
  return find;
};

const Menu = (props) => {
  let { menuList, activeDoc, version, versions, locale, isDocAPI, isDocHub } = props;

  if (!version || version === "") {
    version = versions[0];
  } 

  const [menuStatus, setMenuStatus] = useState(true);
  const { isBlog } = menuList || {};
  const [realMenuList, setRealMenuList] = useState([]);
  useEffect(() => {
    const generateMenu = (list) => {
      // get all labels , make sure will generate menu from top to bottom
      const labelKeys = Object.keys(menuList.menuList[0])
        .filter((v) => v.includes("label"))
        .sort((a, b) => a[a.length - 1] - b[b.length - 1]);
      let index = 0;
      return function innerFn(formatMenu = []) {
        let copyMenu = JSON.parse(JSON.stringify(formatMenu));
        const parentLabel = index ? labelKeys[index - 1] : "";

        if (index && !parentLabel) {
          return copyMenu;
        }
        const generatePath = (doc, isDocAPI, isDocHub) => {
          if(isDocAPI || isDocHub) {
            return `${doc.id}`;
          } else {
            return `/docs/${version}/${doc.id}`;
          }
        };
        // find top menu by current label
        const topMenu = list.filter((v) => {
          if (!labelKeys[index] || !v[labelKeys[index]]) {
            return index > 0 ? (v[parentLabel] ? true : false) : true;
          }
          return false;
        });

        topMenu.forEach((v) => {
          const item = {
            ...v,
            children: [],
            showChildren: true,
            isActive: false,
            isLast: !labelKeys[index + 1],
            isBlog,
            path: generatePath(v, isDocAPI, isDocHub),
          };
          if (index === 0) {
            copyMenu.push(item);
          } else {
            const parent = findItem("id", v[parentLabel], copyMenu);
            parent && parent.children.push(item);
          }
        });

        index++;
        return innerFn(copyMenu);
      };
    };

    const checkActive = (list) => {
      const findDoc = findItem("id", activeDoc, list);
      if (!findDoc) {
        return;
      }
      const labelKeys = Object.keys(findDoc).filter((v) => v.includes("label"));
      findDoc.isActive = true; // here will open the right menu and give the active color
      labelKeys.forEach((label) => {
        const parentDoc = findItem("id", findDoc[label], list);
        parentDoc && (parentDoc.showChildren = true);
      });
    };

    const sortMenu = (list) => {
      list.sort((a, b) => {
        return a.order - b.order;
      });
      list.forEach((v) => {
        if (v.children && v.children.length) {
          sortMenu(v.children);
        }
      });
    };
    const arr = generateMenu(menuList.menuList)();
    checkActive(arr);
    sortMenu(arr);
    setRealMenuList(arr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuList, activeDoc, version]);

  const screenWidth = useMobileScreen();
  useEffect(() => {
    setMenuStatus(screenWidth > 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);

  const menuRef = useRef(null);

  const handleMenuClick = (e) => {
    const menuContainer = menuRef.current;
    window.localStorage.setItem("zilliz-height", menuContainer.scrollTop);
  };

  useEffect(() => {
    const menuContainer = menuRef.current;
    const scrollTop = window.localStorage.getItem("zilliz-height") || 0;
    menuContainer.scrollTop = scrollTop;
  }, [props]);

  const generageMenuDom = (list, className = "") => {
    return list.map((doc) => (
      <div
        className={`${className} ${doc.isBlog ? "blog" : ""} ${
          doc.isLast ? "menu-last-level" : ""
        } ${doc.isActive ? "active" : ""}`}
        key={doc.id}
      >
        <div
          className="menu_name-wrapper"
          onClick={
            doc.isMenu
              ? () => {
                  toggleMenuChild(doc);
                }
              : handleMenuClick
          }
          style={doc.isMenu ? { cursor: "pointer" } : null}
        >
          {doc.outLink ? (
            <a
              href={doc.outLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text outlink"
            >
              <i className="fas fa-external-link-alt"></i>
              {doc.title}
            </a>
          ) : doc.isMenu === true ? (
            <span className="text">{doc.title}</span>
          ) : (
            <LocalizeLink locale={locale} className="text" to={doc.path}>
              {doc.title}
            </LocalizeLink>
          )}

          {doc.children && doc.children.length ? (
            <i
              className={`fas fa-chevron-down arrow ${
                doc.showChildren ? "" : "top"
              }`}
            ></i>
          ) : null}
        </div>
        <div className={`menu-child-wrapper ${doc.showChildren ? "open" : ""}`}>
          {doc.children && doc.children.length
            ? generageMenuDom(doc.children, "menu-child")
            : null}
        </div>
      </div>
    ));
  };

  const toggleMenuChild = (doc) => {
    const copyMenu = JSON.parse(JSON.stringify(realMenuList));
    const findDoc = findItem("title", doc.title, copyMenu);
    findDoc.showChildren = !findDoc.showChildren;
    setRealMenuList(copyMenu);
  };

  const toggleMenu = (status) => {
    setMenuStatus(status);
  };

  return (
    <>
      <section
        className={`menu-container ${menuStatus ? "" : "hide"}`}
        ref={menuRef}
      >
        {screenWidth <= 1000 ? (
          <i
            className="fas fa-times close"
            onClick={() => {
              toggleMenu(false);
            }}
          ></i>
        ) : null}
        {isDocHub || isDocAPI ? (
          <div className="border-bottom select-wrapper">
          <div className="h-version">Haystack Hub </div>
          </div>
        ) : (
        <div className="border-bottom select-wrapper">
        <div className="h-version">Core Version: </div>
                    <VersionSelector
                      options={versions}
                      selected={version}
                      locale={locale}
                      isVersion={true}
                    ></VersionSelector>
                  
        </div>
        )}
        

        {generageMenuDom(realMenuList, "menu-top-level border-bottom")}
      </section>
      {!menuStatus ? (
        <div
          className="mini-menu-control"
          onClick={() => {
            toggleMenu(true);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      ) : null}
    </>
  );
};
export default Menu;