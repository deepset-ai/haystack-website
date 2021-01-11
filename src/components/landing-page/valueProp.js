import React from 'react';
import Button from "./button";
import Logo from "../../images/HaystackIcon.png"
import HaystackHubSearch  from "../../images/gifs/ScreencastHaystackHub_new.gif"; 


const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <img className="logo-icon" src={Logo} alt="Haystack Icon"></img>
          <p className="main-subtitle">Neural Question Answering at Scale</p>
          <div>
          <Button label="Get Started" to="/docs/intromd"/>
          <Button label="Join Our Community" to="/community/join"/>
          </div>
        </div>
        <div className="main-photo">
        <img src={HaystackHubSearch} className="img-main-photo" alt="Haystack-Hub"></img>
        </div>
      </div>
    </section>
  )
};

export default ValueProp;