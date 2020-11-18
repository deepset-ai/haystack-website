import React from 'react'
import PropTypes from 'prop-types'
import "../../scss/specs/_specinformation.scss";

const SpecInformation = ({ title, version, description }) => (
  <div>
    <h1>{title}</h1>

    <p>We also provide a <a href="https://api.haystack-hub.com/docs" target="_blank" rel="noreferrer">
      Swagger UI 
      </a>. Please feel free to check it out.</p>

    <h2>Errors</h2>
    <div className="method-area">
        <div className="request-desc-endpoint">
          <p>Haystack Hub Rest API uses conventional HTTP response codes to indicate the success 
            or failure of an API request. In general: Codes in the 2xx range indicate 
            success. Codes in the 4xx range indicate an error that failed given the 
            information provided. Codes in the 5xx range indicate an error with Haystack Hub's servers.</p>
          </div>
          <div className="request-endpoint">
          <div className="method-example-response-topbar">
            <div className="method-example-response-title">
              <div className="method-example-response-title-text">
                HTTP Status Code Summary
              </div>
            </div>
            <div className="ResourceSectionEndpoints-endpoints">
                <table>
                  <tr>
                    <td>200 - OK</td>
                    <td>Everything worked as expected.</td>
                  </tr>
                  <tr>
                    <td>400 - Bad Request</td>
                    <td>The request was unacceptable, often due to missing a required parameter.</td>
                  </tr>
                  <tr>
                    <td>401 - Unauthorized</td>
                    <td>No valid API key provided.</td>
                  </tr>
                  <tr>
                    <td>402 - Request Failed</td>
                    <td>The parameters were valid but the request failed.</td>
                  </tr>
                  <tr>
                    <td>403 - Forbidden</td>
                    <td>The API key doesn't have permissions to perform the request.</td>
                  </tr>
                  <tr>
                    <td>404 - Not Found</td>
                    <td>The requested resource doesn't exist.</td>
                  </tr>
                  <tr>
                    <td>409 - Conflict</td>
                    <td>The request conflicts with another request (perhaps due to using the same idempotent key).</td>
                  </tr>
                  <tr>
                    <td>429 - Too Many Requests</td>
                    <td>Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.</td>
                  </tr>
                  <tr>
                    <td>500, 502, 503, 504 - Server Errors</td>
                    <td>Something went wrong on Haystack Hub's end.</td>
                  </tr>
                </table>
            </div>
          </div>
        </div>
    </div>
  </div>
)

SpecInformation.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SpecInformation