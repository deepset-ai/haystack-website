import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import groupBy from 'lodash.groupby'
import SpecInformation from '../components/spec/SpecInformation'
import SpecPaths from '../components/spec/SpecPaths'
import g from 'glamorous'
import { graphql } from "gatsby"

const backStyle = {
  marginBottom: '1rem',
}

class Api extends Component {
  render() {
    const api = this.props.data.openApiSpec
    const paths = api.childrenOpenApiSpecPath
    const pathGroups = groupBy(paths, p => p.tag)

    return (
      <div>
        <g.Div css={backStyle}>
          <Link to="/">Back</Link>
        </g.Div>
        <SpecInformation
          title={api.title}
          version={api.version}
          description={api.description}
        />
        {Object.keys(pathGroups).map(t => (
          <SpecPaths key={t} tag={t} paths={pathGroups[t]} />
        ))}
      </div>
    )
  }
}

Api.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Api

export const query = graphql`
  query ApiQuery($id: String!) {
    openApiSpec(id: { eq: $id }) {
      version
      title
      description
      childrenOpenApiSpecPath {
        name
        verb
        operationId
        summary
        description
        fullPath
        parameters {
          name
          in
          description
          required
          type
          format
        }
        tag
        childrenOpenApiSpecResponse {
          id
          statusCode
          description
          childrenOpenApiSpecDefinition {
            name
            properties {
              name
              type
              description
              format
            }
          }
        }
      }
    }
  }`