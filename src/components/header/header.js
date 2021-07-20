import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import LocalizedLink from "../../components/localizedLink/localizedLink";  

import "./header.scss";
import Logo from "../../images/HaystackLogo.png"
import { useMobileScreen } from "../../hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Button from "../landing-page/button";

const Header = ({ siteTitle, menuLinks }) => {

  const screenWidth = useMobileScreen();
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setMobileNav(false);
    });
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setMobileNav((v) => !v);
  };

  return (
    <>
      <div className="full-header-wrapper" >
      
        <header className="header-wrapper">
          <div className="logo-wrapper">
            <LocalizedLink locale="en" to={"/docs/intromd"}>
              <img src={Logo} alt="Haystack Logo">
              </img> 
            </LocalizedLink>
          </div>
          {screenWidth > 1000 ? (
            <div className="right">

              <LocalizedLink
                to="/docs/intromd"
                className="link"
                locale="en"
              >
                Haystack Docs
              </LocalizedLink>

              <LocalizedLink
                to="/docs_hub/intro_hubmd"
                className="link"
                locale="en"
              >
                Haystack Hub Docs
              </LocalizedLink>

              <LocalizedLink
                locale="en"
                className="link"
                to="/bm/benchmarks"
              >
                Benchmarks
              </LocalizedLink>

              <div className="Rectangle "></div>

              <Button
                to="/community/join"
                label="Join Slack"
                className="beta-button"
                              >
              </Button>.

              <a
                    className="beta-button-link"
                    href={`https://www.meetup.com/de-DE/open-nlp-meetup/`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                Join Open NLP
              </a>

            </div>
          ) : ( 
             <FontAwesomeIcon className="fontawsome-icon" icon={faBars} onKeyDown={handleClick}
             onClick={handleClick}/>
          )}
        </header>
        <div className={`mobile-nav ${mobileNav && "open"}`}>
        <LocalizedLink
         to="/docs/intromd"
         className="link"
         locale="en"
        >
          Haystack Docs
        </LocalizedLink>

        <LocalizedLink
         to="/docs_hub/intro_hubmd"
         className="link"
         locale="en"
        >
          Haystack Hub Docs
        </LocalizedLink>

        <LocalizedLink
          locale="en"
          className="link"
          to="/bm/benchmarks"
        >
          Benchmarks
        </LocalizedLink>

        <Button
          to="/community/join"
          label="Join Slack"
                        >
        </Button>

        <a
          className="beta-button-link"
          href={`https://www.meetup.com/de-DE/open-nlp-meetup/`}
          target="_blank"
          rel="noreferrer noopener"
          >
          Join Open NLP
        </a>
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
