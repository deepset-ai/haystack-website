import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

const superScriptStyle = {
  position: 'relative',
  top: '-0.5em',
  fontSize: '0.6rem',
  color: 'rgba(255,0,0,.6)',
}

const SpecPathParameter = ({
  name,
  source,
  description,
  type,
  format,
  required,
}) => {
  return (
    <tr>
      <td>
        <g.P marginBottom="0.5rem">
          {name}{' '}
          {required && <g.Span css={superScriptStyle}>* required</g.Span>}
        </g.P>
        {type && (
          <g.P fontWeight="600" marginBottom="0">
            {type}
          </g.P>
        )}
        {source && (
          <p>
            <em>({source})</em>
          </p>
        )}
      </td>
      <td>{description}</td>
    </tr>
  )
}

SpecPathParameter.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  format: PropTypes.string,
  required: PropTypes.bool,
}

const SpecPathParameters = ({ parameters }) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {parameters.map((p, i) => (
        <SpecPathParameter
          key={`parameter-${i}`}
          name={p.name}
          source={p.in}
          description={p.description}
          type={p.type}
          format={p.format}
          required={p.required}
        />
      ))}
    </tbody>
  </table>
)

SpecPathParameters.propTypes = {
  parameters: PropTypes.array.isRequired,
}

export default SpecPathParameters