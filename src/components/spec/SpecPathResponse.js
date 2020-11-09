import React from 'react'
import PropTypes from 'prop-types'
import g from 'glamorous'
import { verbColor } from './Verb'
import SpecDefinition from './SpecDefinition'

const getInsetStyle = color => ({
  border: `1px solid ${color}`,
  borderRadius: '4px',
  padding: '0.8rem',
  marginBottom: '1rem',
})

const SpecPathResponse = ({ verb, statusCode, description, definitions }) => {
  return (
    <g.Div
      css={getInsetStyle(verbColor(verb).normal)}
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, .2)"
    >
      <g.Div display="flex" alignItems="center">
        <g.H4 flex="1 1 50%">{statusCode}</g.H4>
        <g.P flex="1 1 50%">{description}</g.P>
      </g.Div>
    </g.Div>
  )
}

/**{definitions.length === 1 ? (
        <g.Div css={getInsetStyle('#ccc')}>
          <SpecDefinition definition={definitions[0]} />
        </g.Div>
      ) : null} */
SpecPathResponse.propTypes = {
  verb: PropTypes.string.isRequired,
  statusCode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  definitions: PropTypes.array.isRequired,
}

export default SpecPathResponse