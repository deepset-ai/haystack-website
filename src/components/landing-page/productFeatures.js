import React from 'react';
import GithubButton from "react-github-button";

const ProductFeatures = props => {

  return (
    <section className="product-features">
      <h2>Neural Question Answering Powered by Open Source</h2>
      <h3>Haystack lets you scale QA models to large collections of documents.</h3>
      <div className="githubicon">
            <GithubButton
              type="stargazers"
              size="large"
              namespace="deepset-ai"
              repo="haystack"
            />
          </div>
      <div className="core-features">
        <a href="/en/docs/tutorial1md">
            <div className="core-feature-1">
            <h3>Latest NLP models</h3>
            <p>Utilize all transformer based models (BERT, RoBERTa, MiniLM, DPR ...) and smoothly switch when new ones get published</p>
            </div>
        </a>
        <a href="/en/docs/tutorial2md">
          <div className="core-feature-3">
            <h3>Flexible databases</h3>
            <p>Load data into and query from a range of databases such as Elasticsearch, FAISS, SQL and more</p>
          </div>
        </a>
        <a href="/en/docs/tutorial3md">
          <div className="core-feature-2">
            <h3>Scalability</h3>
            <p>Production-ready deployments that scale to millions of documents</p>
          </div>
        </a>
        <a href="/en/docs/tutorial3md">
          <div className="core-feature-2">
            <h3>End-to-End</h3>
            <p>All tooling you need to implement, evaluate, improve and run a QA system</p>
          </div>
        </a>
        <a href="/en/docs/tutorial3md">
          <div className="core-feature-2">
            <h3>Domain adaptation</h3>
            <p>Fine-tune models to your own domain & improve them continuously via user feedback</p>
          </div>
        </a>
      </div>
    </section>
  )
};

export default ProductFeatures;