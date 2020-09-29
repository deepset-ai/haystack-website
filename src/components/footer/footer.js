
import React from "react";
import PropTypes from "prop-types";
import LocalizedLink from "../localizedLink/localizedLink"
import "./footer.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = ({ locale, style }) => {
  // const l = locale === "cn" ? "en" : "cn";
  // const to = globalHistory.location.pathname
  //   .replace("/en/", "/")
  //   .replace("/cn/", "/");
  return (
    <footer className="footer-wrapper" style={style}>
      <div className="follow">Social networks 
      <Link></Link>
      <Link></Link>
      <Link></Link></div>
      <div className="copy-right">
        <span>© 2020 - {new Date().getFullYear()} deepset. All rights reserved.</span>
          <LocalizedLink
            locale="en"
            className="link"
            to=""
          >
            TERMS OF SERVICE
          </LocalizedLink>
          <LocalizedLink
            locale="en"
            className="link"
            to=""
          >
            PRIVACY POLICY
          </LocalizedLink>
        </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.object,
  locale: PropTypes.string.isRequired
};

export default Footer;