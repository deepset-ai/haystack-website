import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import "../../scss/specs/_specpath.scss";

const SpecPaths = ({ tag, paths }) => {

  const [showChild, setShowChild] = useState(false);

  function iterateJSON(jsonObject= {}) {
    let type = "";
    let elementArray = null;
    let element = null;
    for (let prop in jsonObject) {
      type = jsonObject[prop].type;
      if(type === "array" && jsonObject[prop]["items"] !== undefined && jsonObject[prop]["items"]["properties"] !== undefined) {
        elementArray = <div>
                      <button className="child-button" onKeyDown={() => {setShowChild(!showChild);}}
                        onMouseDown={(e) => { e.stopPropagation(); setShowChild(!showChild);}}>
                       <div className="child-button-div">Show child attributes{showChild? (<div><FontAwesomeIcon class="fontawsome-icon" icon={faChevronUp}/></div>) : (<div><FontAwesomeIcon class="fontawsome-icon" icon={faChevronDown}/></div>)}</div>
                     </button> 
                     {showChild && ( <div className="child-element">{iterateJSON(jsonObject[prop]["items"]["properties"])}</div>)}</div>;
      }
      element = <div>{element}<div><span className="prop-name">{prop}</span> <span>{type}</span></div><div>{jsonObject[prop].description}</div><hr/>{elementArray}</div>;
      elementArray = null;
    }
    return <div className="parent-element">{element}</div>;
  }

  return (<div>
    <h2 id={tag}>{tag}</h2>
    {paths.map(p => (
      <div>
      <h3>{p.summary}</h3>
      <div  className="method-area">
        <div className="request-desc-endpoint">
          <div className="parameters">Parameters</div>
          {p.parameters && ( 
          <table>
            <tr>
              <th>Name</th>
              <th>Example</th>  
            </tr> 
            {p.parameters.map(parameter => (
              <tr>
                <td>{parameter.name} {parameter.required && (<span>*</span>)} ({parameter.schema.type})</td>
                <td>{parameter.schema.example}</td>  
              </tr>  
            ))}
          </table>
          )}  
        </div>
        <div className="request-endpoint">
          <div className="method-example-response-topbar">
            <div className="method-example-response-title">
              <div className="method-example-response-title-text">
                Endpoint
              </div>
            </div>
            <div className="ResourceSectionEndpoints-endpoints">
              <span className={p.verb}>{p.verb}</span> {p.fullPath}
            </div>
          </div>
        </div>
      </div>

      {p.verb === "post" | p.verb === "put" | p.verb === "patch" ? (
      <div className="method-area">
        <div className="request-desc-endpoint">
          <div className="parameters">Attributes</div>
          {iterateJSON(JSON.parse(p.exampleDef))}
          </div>
        <div className="request-endpoint">
          <div className="method-example-response-topbar">
            <div className="method-example-response-title">
              <div className="method-example-response-title-text">
                Request Body Example
              </div>
            </div>
            <div className="ResourceSectionEndpoints-endpoints">
              <pre class="box">
                <code class="language-json">
                  {p.example}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      ) : ( null ) }

      {p.verb === "get" | p.verb === "delete" ? (
      <div  className="method-area">
        <div className="request-desc-endpoint">
        <div className="parameters">Returns</div>
        <p>{p.childrenOpenApiSpecResponse[0].description}</p>
        </div>
        <div className="request-endpoint">
          <div className="method-example-response-topbar">
            <div className="method-example-response-title">
              <div className="method-example-response-title-text">
                Response
              </div>
            </div>
            <div className="ResourceSectionEndpoints-endpoints">
              <pre class="box">
                <code class="language-json">
                  {p.childrenOpenApiSpecResponse[0].response}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      ) : ( null ) }
      </div>
    ))}
  </div>
);

};
//{iterateJSON(p.exampleDef)}

SpecPaths.propTypes = {
  tag: PropTypes.string.isRequired,
  paths: PropTypes.array.isRequired,
}

export default SpecPaths
