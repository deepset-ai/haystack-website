
import React from "react";
import PropTypes from "prop-types";
import LocalizedLink from "../localizedLink/localizedLink"
import "./footer.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ style }) => {
  // const l = locale === "cn" ? "en" : "cn";
  // const to = globalHistory.location.pathname
  //   .replace("/en/", "/")
  //   .replace("/cn/", "/");
  return (
    <footer className="footer-wrapper" style={style}>
      <div className="follow">Social networks: 
      <Link to="https://twitter.com/deepset_ai/"><FontAwesomeIcon class="fontawsome-icon" icon={faTwitter}/></Link>
      <Link to="https://www.linkedin.com/company/deepset-ai/"><FontAwesomeIcon class="fontawsome-icon" icon={faLinkedin}/></Link>
      </div>
      <div className="copy-right">
        <span>© 2020 - {new Date().getFullYear()} deepset. All rights reserved.</span>
          <LocalizedLink
            locale="en"
            className="link"
            to="https://deepset.ai/imprint"
          >
            IMPRINT
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