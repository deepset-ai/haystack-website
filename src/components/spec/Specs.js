import React from 'react'
import PropTypes from 'prop-types'
import Spec from './Spec'

const Specs = ({ specs }) => (
  <div>
    <ul>
      {specs.map(s => <Spec key={s.name} name={s.name} title={s.title} />)}
    </ul>
  </div>
)

Specs.propTypes = {
  specs: PropTypes.array.isRequired,
}

export default Specs