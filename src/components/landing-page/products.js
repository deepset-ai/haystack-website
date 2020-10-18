import React from 'react';
import Button from "./button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import OpenSource from "../../images/im-card-1@3x.png"
import HaystackHub from "../../images/im-card-2@3x.png"


const Products = props => {

  return (
    <section className="products">
        <div className="all-products">
      <h2>Our Products</h2>
      <h3 className="h3-products">Free for Developers. Full Service for Enterprises.</h3>
        <div className="products-options products-opensource">
            <div className="prodcuts-header">
                <img className="product-img haystackos-img" src={OpenSource} alt="Haystack Open Source"></img>
                <h4>Haystack Open Source</h4>
                <p>Open source framework to scale QA models to large collections of documents.</p>
            </div>
            <div classname="description-features">
            <div className="product-description">Feature higlights include:</div>
            <div className="products-features">
            <div class="row">
                <div class="column-left">
                    <ul>
                        <li>
                            <FontAwesomeIcon className="check-font" icon={faCheck}/>
                        </li>
                        <li>
                            <FontAwesomeIcon className="check-font" icon={faCheck}/>
                        </li>
                    </ul>
                </div>
                <div class="column">
                <ul>
                    <li>
                        Latest NLP Models
                    </li>
                    <li>
                        Flexibel databases
                    </li>
                </ul>
                </div>
                <div class="column-left">
                <ul>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/> 
                    </li>
                </ul>
                </div>
                <div class="column">
                <ul>
                    <li>
                        Scalability 
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </div>
            <div className="products-actions">
                <Button label="Learn More"  className="learnmore-button" to="/en/docs/intromd" />
                <Button label="Get Started" className="trial-button" to="/en/docs/get_startedmd" />
            </div>
        </div>
        <div className="products-options products-enterprise">
            <div className="prodcuts-header">
                <img className="product-img haystackhub-img" src={HaystackHub} alt="Haystack Hub"></img>
                <h4>Haystack Hub</h4>
                <p>Enterprise-ready subscription with full service to enable neural search.</p>
            </div>
            <div classname="description-features">
            <div className="product-description">Everything in Open Source plus:</div>
            <div className="products-features">
            <div class="row">
            <div class="column-left">
                <ul>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                </ul>
                </div>
                <div class="column">
                <ul>
                    <li>
                        Web interface for configuring and operating your QA system
                    </li>
                    <li>
                        Search UI for end users
                    </li>
                </ul>
                </div>
                <div class="column-left">
                <ul>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className="check-font" icon={faCheck}/>
                    </li>
                </ul>
                </div>
                <div class="column">
                <ul>
                    <li>
                        API access
                    </li>
                    <li>
                        Support
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </div>
            <div className="products-actions">
                <Button label="Learn More" className="learnmore-button" to="/en/docs/introhubmd" />
                <Button label="Free Trial" className="trial-button" />
            </div>
        </div>
        </div>
    </section>
  )
};

export default Products;