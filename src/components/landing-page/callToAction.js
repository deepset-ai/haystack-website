import React from 'react';
import Button from "./button";
 

const CallToAction = props => {

  return (
    <section className="cta">
      <h2>Get Startet with Neural Question Answering</h2>
      <Button label="Get Started"  to="/en/docs/overviewmd"/>
      <Button label="Contact Us" to="/contact/contact" />
    </section>
  )
};

export default CallToAction;