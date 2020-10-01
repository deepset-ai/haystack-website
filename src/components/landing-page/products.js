import React from 'react';
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Logo from "../../images/HaystackIcon.png"
import Search from "../../images/HaystackSearch.png"


const Products = props => {

  return (
    <section className="products">
        <div className="all-products">
      <h2>Our Products</h2>
      <h3 className="h3-products">Free for Developers. Full Service for Enterprises</h3>
        <div className="products-options products-options-empty">
            <br/>
        </div>
        <div className="products-options products-opensource">
            <div className="prodcuts-header">
                <img className="logo-icon" src={Logo} alt="Haystack Icon"></img>
                <FontAwesomeIcon className="fa fa-heart" icon={faHeart}/>
                <FontAwesomeIcon className="fa fa-github" icon={faGithub}/>
                <h3>Haystack Open Source</h3>
                Open source framework to scale QA models to large collections of documents.<br/><br/>
            </div>
            <div className="product-description">Feature higlights include:</div>
            <div className="products-features">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> Latest NLP Models
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> Flexibel databases
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> Scalability 
                    </li>
                    <li><br/></li>
                </ul>
            </div>
            <div className="products-actions">
                <Button label="Get Started" to="/en/docs/get_startedmd" />
                <Button label="Learn More" to="/en/docs/intromd" />
            </div>
        </div>
        <div className="products-options products-enterprise">
            <div className="prodcuts-header">
                <img className="logo-search" src={Search} alt="Haystack Icon"></img>
                <h3>Haystack Hub</h3>
                Enterprise-ready subsription with full service to enable neural search.<br/><br/>
            </div>
            <div className="product-description">Everything in Open Source plus:</div>
            <div className="products-features">
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> Web interface for uploading your documents, configuring your models
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> Search UI for end users
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> API access
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCheck}/> Support
                    </li>
                </ul>
            </div>
            <div className="products-actions">
                <Button label="Free Trial" />
                <Button label="Learn More" to="/en/docs/introhubmd" />
            </div>
        </div>
        <div className="products-options products-options-empty">
            <br/>
        </div>
        </div>
    </section>
  )
};

export default Products;