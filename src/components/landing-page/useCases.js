import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import FinancialGovernance from "../../images/ico-ico-80-search-grey-finance.svg"
import KnowledgeBase from "../../images/ico-ico-80-search-grey-2.svg"
import MCIngelliegence from "../../images/ico-ico-80-market@3x.png"

const UseCases = props => {

  return (
    <section id="main-use-cases" className="usecases">
      <div className="all-usecases">
      <div className="usecase-group">
        <div className="usecase-card-1">
        <img className="usecase-img" src={FinancialGovernance} alt="Financial Governance"></img>
          <div className="uc-h3"><h3>Financial Governance</h3></div>
          <div className="uc-description">
            Gaining insights into financial data of multiple companies within a market. 
            Analysis mainly focuses on reducing risks e.g. credit decisions.
          </div>
          <div className="uc-values">
          <div className="row">
            <div className="column-left">
                <ul>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                </ul>
                </div>
                <div className="column">
                <ul>
                    <li>
                      Faster and efficient insights
                    </li>
                    <li>
                      Comprehensive insights into the full data and therefore significantly less risk in the analysis
                    </li>
                </ul>
                </div>
            </div>
          </div>
          <div className="uc-examples">
          <div className="h-example"><h4>Examples:</h4></div> 
          <div className="row">
            <div className="column-left">
                <ul>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                </ul>
                </div>
                <div className="column">
                <ul>
                    <li>
                      Checking plausibility of accruals
                    </li>
                    <li>
                    Checking of measures taken against pandemic risks in a portfolio of companies
                    </li>
                </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="usecase-card-2">
        <img className="usecase-img" src={KnowledgeBase} alt="knowledge Base Search"></img>
        <div className="uc-h3"><h3>Knowledge Base Search</h3></div>
          <div className="uc-description">
            Finding relevant information in infromation portals or wikis.
          </div>
          <div className="uc-values">
          <div className="row">
            <div className="column-left">
                <ul>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                </ul>
                </div>
                <div className="column">
                <ul>
                    <li>
                      Direct resolution of tickets
                    </li>
                    <li>
                      Increased customer satisfaction
                    </li>
                    <li>
                      More efficient onboarding and knowledge sharing in enterprises
                    </li>
                </ul>
                </div>
            </div>
            </div>
          <div className="uc-examples">
          <div className="h-example"><h4>Examples:</h4></div>
          <div className="row">
            <div className="column-left">
                <ul>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                </ul>
                </div>
                <div className="column">
                <ul>
                    <li>
                      Customers looking for guidance on terms & conditions
                    </li>
                    <li>
                      Employees looking for company's travel policy etc.
                    </li>
                </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="usecase-card-3">
        <img className="usecase-img" src={MCIngelliegence} alt="Market & Competitor Intelligence"></img>
        <div className="uc-h3"><h3>Market & Competitor Intelligence</h3></div>
          <div className="uc-description">
            Analyzing market trends and monitoring of competitive strategy.
          </div>
          <div className="uc-values">
          <div className="row">
            <div className="column-left">
                <ul>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faPlus}/>
                    </li>
                </ul>
                </div>
                <div className="column">
                <ul>
                    <li>
                      Comprehensive analysis of complete data sets
                    </li>
                    <li>
                      Higher efficiency in research leaving more time for humans to create synthesis
                    </li>
                </ul>
                </div>
            </div>
          </div>
          <div className="uc-examples">
          <div className="h-example"><h4>Examples:</h4></div>
            <div className="row">
            <div className="column-left">
                <ul>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                    <li>
                      <FontAwesomeIcon className="check-font" icon={faCircle}/>
                    </li>
                </ul>
                </div>
                <div className="column">
                <ul>
                    <li>
                      Analyzing the outlook of the growth of AI in Automotive
                    </li>
                    <li>
                      Overview over all M&A activities
                    </li>
                    <li>
                      Evaluation of growth rate for EMEA market from different sources
                    </li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </div >
      </div>
    </section >
  )
};

export default UseCases;