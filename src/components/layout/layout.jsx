/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header";
import Footer from "../footer/footer";
import CookieConsent from "react-cookie-consent";

import "./layout.scss";
import "../../reset.scss";
const Layout = ({ children, language="en", locale="en" }) => {
  return (
    <>
      <Header language={language} locale={locale} />
      <div className="content-wrapper">{children}</div>
      <CookieConsent
        location="bottom"
        buttonText="OK, DON'T SHOW AGAIN"
        style={{ background: "#08415D", width: "40%", "text-align": "center", 
          "border-radius": "8px", "margin-left": "30%", "margin-bottom": "10px", }}
        buttonWrapperClasses="cookies-button-wrapper"
        buttonStyle={{ background: "#009BAA", fontSize: "13px", color: "#ffffff", "border-radius": "4px"}}
        expires={150}
      >
        We use cookies to provide the best site experience.
      </CookieConsent>
      <Footer language={language} locale={locale}></Footer>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.object.isRequired,
  locale: PropTypes.string.isRequired
};
export default Layout;