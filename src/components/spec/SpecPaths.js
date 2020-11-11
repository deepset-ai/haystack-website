import React from 'react'
import PropTypes from 'prop-types'

import "../../scss/specs/_specpath.scss";

const SpecPaths = ({ tag, paths }) => (
  <div>
    <h2 id={tag}>{tag}</h2>
    {paths.map(p => (
      <div>
      <h3>{p.summary}</h3>
      <div  className="method-area">
        <div className="request-desc-endpoint">
          <span className="parameters">Parameters</span>
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
        <div className="request-desc-endpoint-attributes">
        <span className="parameters">Attributes</span>
        </div>
        </div>
        <div className="request-endpoint">
          <div className="method-example-response-topbar">
            <div className="method-example-response-title">
              <div className="method-example-response-title-text">
                Request Body
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
        <div className="request-desc-endpoint-attributes">
        <span className="parameters">Returns</span>
        </div>
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
)

SpecPaths.propTypes = {
  tag: PropTypes.string.isRequired,
  paths: PropTypes.array.isRequired,
}

export default SpecPaths
