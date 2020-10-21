import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "react-github-button/assets/style.css";
import "../scss/index.scss";
//import IconJPG from "../images/HaystackIcon.jpg"
import Logo from "../images/HaystackLogo.png"

import ValueProp from "../components/landing-page/valueProp";
import ProductFeatures from "../components/landing-page/productFeatures";
//import UserProof from "../components/landing-page/userProof";
import Products from "../components/landing-page/products";
import UseCases from "../components/landing-page/useCases";
import CallToAction from "../components/landing-page/callToAction";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Haystack Hub" image={Logo} />
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
