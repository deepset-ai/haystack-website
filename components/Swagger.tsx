import React, {Component} from 'react';
import SwaggerUi from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

class Swagger extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      // Temporary refers to a branch, update it right before merging https://github.com/deepset-ai/haystack/pull/2047
      url: `https://raw.githubusercontent.com/deepset-ai/haystack/add_api_desc_for_rest_api/docs/_src/api/openapi/openapi.json`,
      // Disables the Try Out buttons on the UI
      supportedSubmitMethods: [],
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}

export default Swagger;