import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'
import Markdown from '../markdown/Markdown'
import Verb, { verbColor } from './Verb'
import SpecPathResponse from './SpecPathResponse'
import SpecPathParameters from './SpecPathParameters'

const pathStyle = verb => ({
  padding: '1rem',
  borderRadius: '4px',
  border: `2px solid ${verbColor(verb).normal}`,
  backgroundColor: verbColor(verb).lighter,
})

const SpecPath = ({ path }) => {
  const responses = path.childrenOpenApiSpecResponse

  return (
    <g.Div css={pathStyle(path.verb)}>
      <g.Div display="flex" alignItems="center">
        <g.Div marginRight="1rem">
          <Verb value={path.verb} />
        </g.Div>
        <g.P fontWeight="600">{path.fullPath}</g.P>
        <g.P marginLeft="auto">{path.summary}</g.P>
      </g.Div>
      <g.P fontWeight="600">{path.operationId}()</g.P>
      {path.description && <Markdown markdown={path.description} />}
      {path.parameters && <SpecPathParameters parameters={path.parameters} />}
      <h3>Responses</h3>
      {responses.map(r => (
        <SpecPathResponse
          key={r.id}
          verb={path.verb}
          statusCode={r.statusCode}
          description={r.description}
          definitions={r.childrenOpenApiSpecDefinition}
        />
      ))}
    </g.Div>
  )
}

SpecPath.propTypes = {
  path: PropTypes.object.isRequired,
}

const SpecPaths = ({ tag, paths }) => (
  <div>
    <h2>{tag}</h2>
    {paths.map(p => (
      <g.Div key={`${p.name}-${p.verb}`} marginBottom="1rem">
        <SpecPath path={p} />
      </g.Div>
    ))}
  </div>
)

SpecPaths.propTypes = {
  tag: PropTypes.string.isRequired,
  paths: PropTypes.array.isRequired,
}

export default SpecPaths
