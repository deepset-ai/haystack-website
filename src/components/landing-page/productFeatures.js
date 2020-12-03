import React from 'react';
import GithubButton from "react-github-button";
import BertImg  from "../../images/ico-ico-80-bert-1@3x.png"; 
import BertAdapt from "../../images/svg/ico-ico-80-language.svg";
import RocketSVG from "../../images/svg/ico-ico-80-rocket.svg"; 
import InvinitySVG from "../../images/svg/ico-ico-80-infinity.svg"; 
import DatabaseSVG from "../../images/svg/ico-ico-80-database.svg"; 

const ProductFeatures = props => {

  return (
    <section className="product-features">
      <div className="all-product-features">
      <h2>Neural Question Answering Powered by Open Source</h2>
      <h3>Haystack lets you scale QA models to millions of documents.</h3>
      <div className="githubicon">
            <GithubButton
              type="stargazers"
              size="large"
              namespace="deepset-ai"
              repo="haystack"
            />
          </div>
      <div className="core-features">
        <a href="/docs/readermd#Choosing-the-Right-Model">
            <div className="core-feature-2">
            <img src={BertImg} className="img-feature img-bert" alt="Bert"></img>
            <h4>Latest NLP models</h4>
            <p>Utilize all transformer based models (BERT & co.) and smoothly switch when new ones get published</p>
            </div>
        </a>
        <a href="/docs/documentstoremd">
          <div className="core-feature-2">
            <DatabaseSVG className="database-svg" />
            <h4>Flexible databases</h4>
            <p>Load data into and query from a range of databases such as Elasticsearch, FAISS, SQL and more</p>
          </div>
        </a>
        <a href="/docs/documentstoremd#Choosing-the-Right-Document-Store">
          <div className="core-feature-2">
            <RocketSVG className="rocket-svg" />
            <h4>Scalability</h4>
            <p>Production-ready deployments that scale to millions of documents</p>
          </div>
        </a>
        <a href="/docs/tutorial1md">
          <div className="core-feature-2">
            <InvinitySVG className="endtoend-svg" />
            <h4>End-to-End</h4>
            <p>All tooling you need to implement, evaluate, improve and operate your QA system</p>
          </div>
        </a>
        <a href="/docs/domain_adaptationmd">
          <div className="core-feature-2">
            <BertAdapt className="bertadap-svg" />
            <h4>Domain adaptation</h4>
            <p>Fine-tune models to your own domain & improve them continuously via user feedback</p>
          </div>
        </a>
      </div>
      </div>
    </section>
  )
};

export default ProductFeatures;