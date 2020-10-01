import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "react-github-button/assets/style.css";
import "../scss/index.scss";

import ValueProp from "../components/landing-page/valueProp";
import ProductFeatures from "../components/landing-page/productFeatures";
import UserProof from "../components/landing-page/userProof";
import Products from "../components/landing-page/products";
import UseCases from "../components/landing-page/useCases";
import CallToAction from "../components/landing-page/callToAction";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Haystack" />
        <ValueProp />
        <ProductFeatures />
        <Products />
        <UseCases />
        <UserProof />
        <CallToAction />
    </Layout>
  );

};
  

export default IndexPage
