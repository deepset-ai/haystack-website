import React from 'react';
import Button from "./button";
import "./landingPage.scss";
import Logo from "../../images/HaystackIcon.png"
import LocalizedLink from "../localizedLink/localizedLink"; 

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <img className="logo-icon" src={Logo} alt="Haystack Icon"></img>
          <p className="main-subtitle">Neural Question Answering at Scale</p>
          <Button label="Get Started" />
          <LocalizedLink
            locale="en"
            to="/"
            className="link"
          >
            Ready for Haystack Hub?
          </LocalizedLink>
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;