import React from 'react';
import Button from "./Button";

const ValueProp = props => {

  return (
    <section className="value-prop">
      <div className="value-prop-content">
        <div className="main-message">
          <h1>Haystack</h1>
          <p className="main-subtitle">Neural Question Answering at Scale</p>
          <Button label="Try Free" />
        </div>
        <div className="main-photo"></div>
      </div>
    </section>
  )
};

export default ValueProp;