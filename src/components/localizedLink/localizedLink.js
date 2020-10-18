
import React from "react";
import { Link } from "gatsby";
import locales from "../../consts/locales.js";
import "./localizedLink.scss";
import scrollTo from 'gatsby-plugin-smoothscroll';

export default ({ locale, to, children, className = "link", scrollTo }) => {
  const language = locales[locale];
  const toMedium = locale === "en" && to.includes("blog");
  if (toMedium) {
    return (
      <a
        href="https://deepset.ai/#resources"
        target="_blank"
        rel="noopener noreferrer"
        children={children}
        aria-label="deepset Blog"
        className={className}
        onClick={() => scrollTo({scrollTo})}
      ></a>
    );
  }

  let path;

  language && !language.default ? (path = `/${locale}${to}`) : (path = to);
  return <Link className={className} children={children} to={path} />;
};