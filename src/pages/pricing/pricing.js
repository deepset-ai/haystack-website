import React from 'react';
import Layout from '../../components/layout/layout';

import './pricing.scss';

import Products from "../../components/landing-page/products";
import Button from "../../components/landing-page/button";

import StargerLogo from "../../images/svg/ico-ico-50-subsc-starter.svg"; 
import BasicLogo from "../../images/svg/ico-ico-50-subsc-basic.svg"; 
import PremiumLogo from "../../images/svg/ico-ico-50-subsc-premium.svg"; 

const PricingPage = () => {

  return (
      <Layout>
        <div className="pricing-products">
        <Products />
        </div>
        <div className="pricing">
          <div className="pricing-options pricing-starter">
            <h4>Neural Search</h4>
            <StargerLogo className="price-logo" />
            <h3 className="h3-starter">Starter</h3>
            <div className="price">&euro; <span className="price-starter">500</span> /month</div>
            <div className="pricing-details">100 Documents or 1 Mio characters<br/>100 requests per day</div>
            <Button className="button-pricing button-starter" label="Free Trial" to="http://haystackhub-service.s3-website.eu-central-1.amazonaws.com/signup/step-1"/>
          </div>
          <div className="pricing-options pricing-basic">
            <h4>Neural Search</h4>
            <BasicLogo className="price-logo" />
            <h3 className="h3-basic">Basic</h3>
            <div className="price">&euro; <span className="price-basic">1000</span> /month</div>
            <div className="pricing-details">1000 Documents or 10 Mio characters<br/>1000 requests per day</div>
            <Button className="button-pricing button-basic" label="Free Trial" to="http://haystackhub-service.s3-website.eu-central-1.amazonaws.com/signup/step-1"/>
          </div>
          <div className="pricing-options pricing-premium">
            <h4>Neural Search</h4>
            <PremiumLogo className="price-logo" />
            <h3 className="h3-premium">Premium</h3>
            <div className="price">&euro; <span className="price-premium">5000</span> /month</div>
            <div className="pricing-details">5000 Documents or 500 Mio characters<br/>5000 requests per day</div>
            <Button className="button-pricing button-premium" label="Free Trial" to="http://haystackhub-service.s3-website.eu-central-1.amazonaws.com/signup/step-1"/>
          </div>
          </div>
          <div className="product-enterprise">
            <div className="enterprise-headings">
              <h2>Neural Search Enterprise</h2>
              <h4>If the options above do not fit to your business needs, feel free to contact us</h4>
            </div>
            <div>
            <Button className="item-button" label="Contanct Us" to="/contact/contact" />
            </div>
          </div>

      </Layout>
  );

};
  

export default PricingPage