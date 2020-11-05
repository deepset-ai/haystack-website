import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'

const SpecDefinitionProperty = ({ name, type, description, format }) => (
  <tr>
    <td>{name}</td>
    <td>{type}</td>
    <td>{description}</td>
    <td>{format}</td>
  </tr>
)

SpecDefinitionProperty.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  description: PropTypes.string,
  format: PropTypes.string,
}

const SpecDefinition = ({ definition }) => (
  <div>
    <g.P fontWeight="600" fontStyle="italic" marginBottom="0">
      {definition.name}
    </g.P>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
          <th>Format</th>
        </tr>
      </thead>
      <tbody>
        {definition.properties.map((p, i) => (
          <SpecDefinitionProperty
            key={`property-${i}`}
            name={p.name}
            type={p.type}
            description={p.description}
            format={p.format}
          />
        ))}
      </tbody>
    </table>
  </div>
)

SpecDefinition.propTypes = {
  definition: PropTypes.object.isRequired,
}

export default SpecDefinition