import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { Link } from "gatsby";

import LocalizedLink from "../../components/localizedLink/localizedLink";  

import "./header.scss";
import Logo from "../../images/Haystack_White_Text.png"
import { useMobileScreen } from "../../hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Button from "../landing-page/Button";

const Header = ({ siteTitle, menuLinks }) => {

  const screenWidth = useMobileScreen();
  const [mobileNav, setMobileNav] = useState(null);
  const [solutionList, setSolutionList] = useState(false);
  const [docsList, setDocsList] = useState(false);

  useEffect(() => {
    window.addEventListener("click", () => {
      setMobileNav(false);
      setSolutionList(false);
      setDocsList(false);
    });
  }, []);

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
                to="/"
                className="link"
              >
                Overview
              </LocalizedLink>
            
              <span
                role="button"
                tabIndex={0}
                className="solutions"
                onMouseOver={() => {
                  setSolutionList(!solutionList);
                }}
                onMouseOut={() => {
                  setSolutionList(!solutionList);
                }}
              >
                Solutions
                {solutionList && (
                  <div className="solutions-list">
                    <LocalizedLink
                      locale="en"
                      to=""
                      className="active"
                    >
                      <span
                        tabIndex={0}
                        role="button"
                      >
                        Financial Governance
                      </span>
                    </LocalizedLink>
                    <LocalizedLink
                      locale="en"
                      to=""
                      className=""
                    >
                      <span
                        tabIndex={0}
                        role="button"
                      >
                        Portal Search
                      </span>
                    </LocalizedLink>
                    <LocalizedLink
                      locale="en"
                      to=""
                      className=""
                    >
                      <span
                        tabIndex={0}
                        role="button"
                      >
                        Market & Competitor Intelligence
                      </span>
                    </LocalizedLink>
                  </div>
                )}
              </span>

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
                className="solutions"
                onMouseOver={() => {
                  setDocsList(!docsList);
                }}
                onMouseOut={() => {
                  setDocsList(!docsList);
                }}
              >
                Docs
                {docsList && (
                  <div className="solutions-list">
                    <LocalizedLink
                      locale="en"
                      to="/en/docs/intromd"
                      className="active"
                    >
                      <span
                        tabIndex={0}
                        role="button"
                      >
                        Haystack Open Source
                      </span>
                    </LocalizedLink>
                    <LocalizedLink
                      locale="en"
                      to=""
                      className=""
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
                  to="/contact/contact"
                >
                  Talk to us
                </LocalizedLink>

                <Button label="Try Free" />
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
