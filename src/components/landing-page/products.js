import React from 'react';
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Products = props => {

  return (
    <section className="products">
      <h2>Our Products</h2>
      <h3 className="h3-products">Free for Developers. Full Service for Enterprises</h3>
        <div className="products-options products-options-empty">
            <br/>
        </div>
        <div className="products-options products-opensource">
            <div className="prodcuts-header">
                <h3>Haystack Open Source</h3>
                Open source framework to scale QA models to large collections of documents.
            </div>
            <div className="products-features">
                <ul>
                    <il>
                        <FontAwesomeIcon icon={faCheck}/>
                    </il>
                    <il>
                        <FontAwesomeIcon icon={faCheck}/>
                    </il>
                    <il>
                        <FontAwesomeIcon icon={faCheck}/>
                    </il>
                </ul>
            </div>
            <div className="products-actions">
                <Button label="Get Started" />
                <Button label="Learn More" />
            </div>
        </div>
        <div className="products-options products-enterprise">
            <div className="prodcuts-header">
                <h3>Haystack Hub</h3>
                Enterprise-ready subsription with full service to enable neural search
            </div>
            <div className="products-features">
                <ul>
                    <il>
                        <FontAwesomeIcon icon={faCheck}/>
                    </il>
                    <il>
                        <FontAwesomeIcon icon={faCheck}/>
                    </il>
                    <il>
                        <FontAwesomeIcon icon={faCheck}/>
                    </il>
                </ul>
            </div>
            <div className="products-actions">
                <Button label="Try For Free" />
                <Button label="Learn More" />
            </div>
        </div>
        <div className="products-options products-options-empty">
            <br/>
        </div>
    </section>
  )
};

export default Products;