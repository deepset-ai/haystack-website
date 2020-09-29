import React from 'react';
import Button from "./button";
 

const CallToAction = props => {

  return (
    <section className="cta">
      <h2>Try our awesome product.</h2>
      <p>There&apos;s nothing to lose. 30 days free trial.</p>
      <Button label="Get Started" />
      <Button label="Contact Us" to="/contact/contact" />
    </section>
  )
};

export default CallToAction;