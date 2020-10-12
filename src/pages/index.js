import React from "react"

import Layout from "../components/layout/layout";
import SEO from "../components/seo"

import GithubLogo from "../images/icon/GitHub-Mark-32px.png"; 
import Banner from "../images/haystack_logo_blue_banner.png";
import Icon from "../images/HaystackIcon.png"
import IconJPG from "../images/HaystackIcon.jpg"

import LocalizedLink from "../components/localizedLink/localizedLink";  

import GithubButton from "react-github-button";
import "react-github-button/assets/style.css";
import { useMobileScreen } from "../hooks";
import "../scss/index.scss";

const IndexPage = () => {

  const screenWidth = useMobileScreen();

  return (
    <Layout>
      <SEO title="Haystack" image={IconJPG}  />
      <main className="home-wrapper">
        <section className="section1">
          <div className="githubicon">
            <GithubButton
              type="stargazers"
              size="large"
              namespace="deepset-ai"
              repo="haystack"
            />
          </div>
          <div className="deepset-banner">
          {screenWidth > 1000 ? (
            <img  claccName="img-deepset-banner" src={Banner} alt="Deepset Banner"></img>
          ) : (
            <img  claccName="img-deepset-banner" src={Icon} alt="Deepset Banner"></img>
          )}
          </div>
          <div className="btn-wrapper">
            <LocalizedLink
              className="primary white-color"
              to="/en/docs/get_startedmd"
              locale="en"
            >
              Get started
            </LocalizedLink>
            <LocalizedLink
              className="primary white-color"
              to="/en/docs/intromd"
              locale="en"
            >
              Learn more
            </LocalizedLink>
          </div>
        </section>
        <section className="section4">
          <h2>Open Source</h2>
          <p>Haystack is open-sourced on GitHub</p>
          <p>Contribution and Feedback are welcome!</p>
          <div className="btn-wrapper">
            <a
              className="primary primary-color with-icon"
              href="https://github.com/deepset-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="github"></img>
              <span>Contribute on Github</span>
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );

};
  

export default IndexPage
