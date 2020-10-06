import React from 'react';
import Layout from '../../components/layout/layout';

import './pricing.scss';

import Products from "../../components/landing-page/products";
import Button from "../../components/landing-page/button";

const PricingPage = () => {

  return (
      <Layout>
        <div className="pricing-products">
        <Products />
        </div>
        <div className="pricing">
          <div className="pricing-options pricing-starter">
            <h4>Neural Search</h4>
            <div className="img-starter">Image</div>
            <h3 className="h3-starter">Starter</h3>
            <div>&euro; <span>500</span> /month</div>
            <div>2,000 pags or 10 Documents<br/>10 requests per day</div>
          </div>
          <div className="pricing-options pricing-basic">
            <h4>Neural Search</h4>
            <div className="img-basic">Image</div>
            <h3 className="h3-basic">Basic</h3>
            <div>&euro; <span>1000</span> /month</div>
            <div>20,000 pags or 100 Documents<br/>1000 requests per day</div>
          </div>
          <div className="pricing-options pricing-premium">
            <h4>Neural Search</h4>
            <div className="img-premium">Image</div>
            <h3 className="h3-premium">Premium</h3>
            <div>&euro; <span>5000</span> /month</div>
            <div>40,000 pags or 2000 Documents<br/>5000 requests per day</div>
          </div>
          </div>
          <div className="product-enterprise">
            <div>
              <h2>Neural Search Enterprise</h2>
              <h4>If the options above do not fit to your business needs, feel free to contact us</h4>
            </div>
            <Button className="item-button" label="Contanct Us" />
          </div>

      </Layout>
  );

};
  

export default PricingPage