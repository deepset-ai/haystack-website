import React from 'react';
import GithubButton from "react-github-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';
import { faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons';

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
        <a href="/en/docs/readermd#Choosing-the-Right-Model">
            <div className="core-feature-2">
            <FontAwesomeIcon className="feature-icon" icon={faBrain}/>
            <h3>Latest NLP models</h3>
            <p>Utilize all transformer based models (BERT, RoBERTa, MiniLM, DPR ...) and smoothly switch when new ones get published</p>
            </div>
        </a>
        <a href="/en/docs/databasemd">
          <div className="core-feature-2">
          <FontAwesomeIcon className="feature-icon" icon={faDatabase}/>
            <h3>Flexible databases</h3>
            <p>Load data into and query from a range of databases such as Elasticsearch, FAISS, SQL and more</p>
          </div>
        </a>
        <a href="/en/docs/databasemd#Choosing-the-right-document-store">
          <div className="core-feature-2">
          <FontAwesomeIcon className="feature-icon" icon={faServer}/>
            <h3>Scalability<br/><br/></h3>
            <p>Production-ready deployments that scale to millions of documents</p>
          </div>
        </a>
        <a href="/en/docs/tutorial1md">
          <div className="core-feature-2">
            <FontAwesomeIcon className="feature-icon" icon={faUndoAlt}/>
            <h3>End-to-End<br/><br/></h3>
            <p>All tooling you need to implement, evaluate, improve and run a QA system</p>
          </div>
        </a>
        <a href="/en/docs/domain_adaptationmd">
          <div className="core-feature-2">
            <FontAwesomeIcon className="feature-icon" icon={faAssistiveListeningSystems}/>
            <h3>Domain adaptation</h3>
            <p>Fine-tune models to your own domain & improve them continuously via user feedback</p>
          </div>
        </a>
      </div>
      </div>
    </section>
  )
};

export default ProductFeatures;