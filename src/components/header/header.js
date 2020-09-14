import PropTypes from "prop-types"
import React from "react"
import {Link} from 'gatsby'

import LocalizedLink from "../../components/localizedLink/localizedLink";  

import "./header.scss";

import Button from "../landing-page/Button";

import Logo from "../../images/HaystackLogo.png"

const Header = ({ siteTitle, menuLinks }) => {

  return (
    <>
      <div className="full-header-wrapper">
        <header className="header-wrapper">
          <div className="logo-wrapper">
            <LocalizedLink locale="en" to={"/"}>
              <img src={Logo} alt="Haystack Logo">
              </img>
            </LocalizedLink>
          </div>

            <div className="right">
              <LocalizedLink
                locale="en"
                to="/"
                className="link"
              >
                Overview
              </LocalizedLink>
              
              <LocalizedLink
                locale="en"
                to="/en/docs/tutorial1md"
                className="link"
              >
                Use Cases
              </LocalizedLink>

              <Link
                to="/pricing/pricing"
                className="link"
              >
                Pricing
              </Link>

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

                <LocalizedLink
                  locale="en"
                  className="link"
                  to="/contact/contact"
                >
                  Talk to us
                </LocalizedLink>

                <Button label="Login" />
                <Button label="Try Free" />
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
