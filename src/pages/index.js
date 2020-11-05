import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "react-github-button/assets/style.css";
import "../scss/index.scss";
import Logo from "../images/haystack_logo_blue_banner_social.png"

import ValueProp from "../components/landing-page/valueProp";
import ProductFeatures from "../components/landing-page/productFeatures";
import Products from "../components/landing-page/products";
import UseCases from "../components/landing-page/useCases";
import CallToAction from "../components/landing-page/callToAction";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Haystack" image={Logo} />
        <ValueProp />
        <ProductFeatures />
        <Products />
        <UseCases />
        <CallToAction />
    </Layout>
  );

};
//<UserProof />
  

export default IndexPage
