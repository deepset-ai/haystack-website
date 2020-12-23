
import React from "react";
import PropTypes from "prop-types";
import "./footer.scss";
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
      <a className="link" href="https://twitter.com/deepset_ai/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="fontawsome-icon" aria-label="twitter" icon={faTwitter}/></a>
      <a className="link" href="https://www.linkedin.com/company/deepset-ai/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon className="fontawsome-icon" aria-label="linkedin" icon={faLinkedin}/></a>
      </div>
      <div className="copy-right">
        <span>© 2020 - {new Date().getFullYear()} deepset. All rights reserved.</span>
          <a className="link" href="https://deepset.ai/imprint"  target="_blank" rel="noreferrer noopener">Imprint</a>
        </div>
    </footer>
  );
};

Footer.propTypes = {
  language: PropTypes.string,
  locale: PropTypes.string.isRequired
};

export default Footer;