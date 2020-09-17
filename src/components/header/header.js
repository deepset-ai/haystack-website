import PropTypes from "prop-types"
import React, { useState } from "react"

import LocalizedLink from "../../components/localizedLink/localizedLink";  

import "./header.scss";
import Logo from "../../images/Haystack_White_Text.png"
import { useMobileScreen } from "../../hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ siteTitle, menuLinks }) => {

  const screenWidth = useMobileScreen();
  const [mobileNav, setMobileNav] = useState(null);

  const handleClick = (e) => {
    e.stopPropagation();
    setMobileNav((v) => !v);
  };

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
          {screenWidth > 1000 ? (
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
          ) : ( 
             <FontAwesomeIcon class="fontawsome-icon" icon={faBars} onKeyDown={handleClick}
             onClick={handleClick}/>
          )}
        </header>
        <div className={`mobile-nav ${mobileNav && "open"}`}>
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
