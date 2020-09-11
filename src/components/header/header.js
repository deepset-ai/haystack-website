import PropTypes from "prop-types"
import React from "react"

import LocalizedLink from "../../components/localizedLink/localizedLink";  

import "./header.scss";

const Header = ({ siteTitle, menuLinks }) => {

  return (
    <>
      <div className="full-header-wrapper">
        <header className="header-wrapper">
          <div className="logo-wrapper">
            <LocalizedLink locale="en" to={"/"}>
              <img src="https://static.tildacdn.com/tild6530-3133-4463-b033-623266656263/deepsetv2_Kopie.png" alt="deepset Logo">
              </img>
            </LocalizedLink>
          </div>

            <div className="right">
              <LocalizedLink
                locale="en"
                to="/en/docs/intromd"
                className="link"
              >
                Overview
              </LocalizedLink>

              <LocalizedLink
                locale="en"
                className="link"
                to="/en/docs/get_startedmd"
              >
                Quick Start
              </LocalizedLink>
              
                <LocalizedLink
                  locale="en"
                  className="link"
                  to="/en/docs/intromd"
                >
                  Docs
                </LocalizedLink>
            </div>
        </header>
      </div>
    </>
  );

};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
