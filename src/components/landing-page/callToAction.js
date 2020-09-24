import React from 'react';
import Button from "./button";
 

const CallToAction = props => {

  return (
    <section className="cta">
      <h1>Try our awesome product.</h1>
      <p>There&apos;s nothing to lose. 30 days free trial.</p>
      <Button label="Get Started" />
    </section>
  )
};

export default CallToAction;