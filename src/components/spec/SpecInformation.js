import React from 'react'
import PropTypes from 'prop-types'
import "../../scss/specs/_specinformation.scss";

const SpecInformation = ({ title, version, description }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
)

SpecInformation.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default SpecInformation