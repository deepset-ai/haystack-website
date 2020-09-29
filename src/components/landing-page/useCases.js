import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const UseCases = props => {

  return (
    <section className="usecases">
      <div className="all-usecases">
      <h2 id="main-use-cases">Use Cases</h2>
      <div className="usecase-group">
        <div className="usecase-card-1">
          <h3>Financial Governance</h3>
          <div className="uc-description">
            Gaining insights into financial data of company of of multiple companies within a market. 
            Analysis mainly focuses on reducing risks e.g. credit decisions.<br/><br/>
          </div>
          <div className="uc-values">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> Faster and efficient insights
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> Comprehensive insights into the full data and therefore significantly less risk in the analysis
                  </li>
                </ul>
          </div>
          <div className="uc-values">
                <ul className="ul-examples">
                  <li className="li-examples"> 
                    Checking plausibility of accruals
                  </li>
                  <li className="li-examples">
                    Checking of measures taken aganinst pandemic risks in a portfolio of companies
                  </li>
                </ul>
          </div>
        </div>
        <div className="usecase-card-2">
          <h3>Portal Search</h3>
          <div className="uc-description">
            Finding relevant information in infromation portals or wikis.<br/><br/>
          </div>
          <div className="uc-values">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> Direct resulotuion of tickets
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> Increase in customer satisfaction
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> More efficient onboarding and knowledge sharing in enterprises
                  </li>
                </ul>
          </div>
          <div className="uc-values">
                <ul className="ul-examples">
                  <li className="li-examples"> 
                    Customers looking for guidance on terms & conditions
                  </li>
                  <li className="li-examples">
                    Employees interested in knowing about company policy on travel etc.
                  </li>
                </ul>
          </div>
        </div>
        <div className="usecase-card-3">
          <h3>Market & Competitor Intelligence</h3>
          <div className="uc-description">
            Analyzing market trend and monitoring of competitive strategy.<br/><br/>
          </div>
          <div className="uc-values">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> Comprehensive analysis of complete data sets
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPlus}/> More effciency in research leaving more time for humans to create synthesis
                  </li>
                </ul>
          </div>
          <div className="uc-values">
                <ul className="ul-examples">
                  <li className="li-examples"> 
                    Analyzing the outlook of the growth of AI in Automotive
                  </li>
                  <li className="li-examples">
                    Overview ofer all M&A activities
                  </li>
                  <li className="li-examples">
                    Evaluation of growth rate for EMEA market from different sources
                  </li>
                </ul>
          </div>
        </div>
      </div >
      </div>
    </section >
  )
};

export default UseCases;