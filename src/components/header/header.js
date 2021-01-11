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
  const [docList, setDocList] = useState(false);

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
            <LocalizedLink locale="en" to={"/"}>
              <img src={Logo} alt="Haystack Logo">
              </img> 
            </LocalizedLink>
          </div>
          {screenWidth > 1000 ? (
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
                to="/#main-use-cases"
                scrollTo="link"
              >
                Use Cases
              </LocalizedLink>

              <LocalizedLink
                to="/pricing/pricing"
                className="link"
                locale="en"
              >
                Pricing
              </LocalizedLink>
            
              <span
                role="button"
                tabIndex={0}
                className="docs"
                onMouseOver={() => {
                  setDocList(true);
                }}
                onMouseLeave={() => {
                            setDocList(false);
                          }}
              >
                Docs
                {docList && (
                  <div className="docs-list">
                    <LocalizedLink
                      locale="en"
                      to="/docs/intromd"
                      className="core"
                    >
                      <span
                        tabIndex={0}
                        role="button"
                      >
                      Haystack
                      </span>
                    </LocalizedLink>
                    <LocalizedLink
                      locale="en"
                      to="/docs_hub/intro_hubmd"
                      className="hub"
                    >
                      <span
                        tabIndex={0}
                        role="button"
                      >
                      Haystack Hub
                      </span>
                    </LocalizedLink>
                  </div>
                )}
              </span>

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
                label="Join Our Community"
                className="beta-button"
                              >
              </Button>
              
              <Button
                  to="/signup/beta"
                  label="Try Haystack Hub"
                  className="beta-button"
                        >
               </Button>
            </div>
          ) : ( 
             <FontAwesomeIcon className="fontawsome-icon" icon={faBars} onKeyDown={handleClick}
             onClick={handleClick}/>
          )}
        </header>
        <div className={`mobile-nav ${mobileNav && "open"}`}>
        <LocalizedLink
          locale="en"
          to="/"
          className="link"
        >
          Overview
        </LocalizedLink>

        <LocalizedLink
          locale="en"
          to="/#main-use-cases"
          scrollTo="link"
        >
          Use Cases
        </LocalizedLink>
              
        <LocalizedLink
         to="/pricing/pricing"
         className="link"
         locale="en"
        >
         Pricing
        </LocalizedLink>

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
          to="/signup/beta"
          label="Try Haystack Hub"
                        >
        </Button>
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
