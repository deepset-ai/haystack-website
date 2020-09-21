import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import GithubLogo from "../images/icon/GitHub-Mark-32px.png"; 
import Banner from "../images/haystack_logo_blue_banner.png";
import Icon from "../images/HaystackIcon.png"

import LocalizedLink from "../components/localizedLink/localizedLink";  

import GithubButton from "react-github-button";
import "react-github-button/assets/style.css";
import { useMobileScreen } from "../hooks";
import "../scss/index.scss";

import ValueProp from "../components/landing-page/ValueProp";
import SocialProof from "../components/landing-page/SocialProof";
import ProductBenefits from "../components/landing-page/ProductBenefits";
import ProductFeatures from "../components/landing-page/ProductFeatures";
import Testimonials from "../components/landing-page/Testimonials";
import CallToAction from "../components/landing-page/CallToAction";

const IndexPage = () => {

  const screenWidth = useMobileScreen();

  return (
    <Layout>
      <SEO title="Haystack" />
        <ValueProp />
        <ProductFeatures />
        <Testimonials />
        <CallToAction />
    </Layout>
  );

};
  

export default IndexPage
