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
        <div className="request-desc-endpoint">Endpoint</div>
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

      <div  className="method-area">
        <div className="request-desc-endpoint">Request Body
        <div className="request-desc-endpoint-attributes">
          Attributes
          <hr/>
          <div>
          email<br/>
          blablabla
          </div>
          <div>
          workspaces<br/>
          blablabla
          </div>
          <div>
          is_super_admin<br/>
          blablabla
          </div>
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

      <div  className="method-area">
        <div className="request-desc-endpoint">Responses</div>
        <div className="request-endpoint">
          <div className="method-example-response-topbar">
            <div className="method-example-response-title">
              <div className="method-example-response-title-text">
                Responses
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
      </div>
    ))}
  </div>
)
/*<g.Div key={`${p.name}-${p.verb}`} marginBottom="1rem">
        <SpecPath path={p} />
      </g.Div>*/

SpecPaths.propTypes = {
  tag: PropTypes.string.isRequired,
  paths: PropTypes.array.isRequired,
}

export default SpecPaths
