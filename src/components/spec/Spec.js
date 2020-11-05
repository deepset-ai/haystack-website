import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

const Spec = ({ name, title }) => (
  <li>
    <Link to={`/apis/${name}`}>{title}</Link>
  </li>
)

Spec.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Spec