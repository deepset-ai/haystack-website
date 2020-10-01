import React from 'react';
import Button from "./button";
import Logo from "../../images/HaystackIcon.png"
import LocalizedLink from "../localizedLink/localizedLink"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <img className="logo-icon" src={Logo} alt="Haystack Icon"></img>
          <p className="main-subtitle">Neural Question Answering at Scale</p>
          <Button label="Get Started" to="/en/docs/overviewmd"/>
          <LocalizedLink
            locale="en"
            to="/contact/contact"
            className="link"
          >
            Ready for Haystack Hub? Get in touch <FontAwesomeIcon icon={faLongArrowAltRight}/>
          </LocalizedLink>
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;