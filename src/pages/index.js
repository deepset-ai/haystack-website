import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import "react-github-button/assets/style.css";
import "../scss/index.scss";
import Logo from "../images/haystack_logo_blue_banner_social.png"
import { useEffect } from 'react';
import { navigate } from 'gatsby';

//import { RedocStandalone } from 'redoc';
//<RedocStandalone specUrl="http://api.haystack-hub.com/openapi.json"/>
const IndexPage = () => {

  useEffect(() => {
    navigate('/docs/intromd');
  }, []);

  return (
    <Layout>
      <SEO title="Haystack" image={Logo} />
        
    </Layout>
  );

};
//<UserProof />
  

export default IndexPage
