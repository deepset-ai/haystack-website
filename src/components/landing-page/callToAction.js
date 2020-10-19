import React from 'react';
import Button from "./button";
 

const CallToAction = props => {

  return (
    <section className="cta">
      <h2>Get Started with Neural Question Answering</h2>
      <div>
      <Button label="Get Started"  to="/docs/intromd"/>
      </div>
      <div>
      <Button label="Contact Us" className="button-contanct" to="/contact/contact" />
      </div>
    </section>
  )
};

export default CallToAction;