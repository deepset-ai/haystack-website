import React from 'react'
import g from 'glamorous'

export const verbColor = value => {
  switch (value) {
    case 'get':
      return {
        normal: '#61affe',
        lighter: 'rgba(97,175,254,.1)',
      }
    case 'post':
      return {
        normal: '#49cc90',
        lighter: 'rgba(73,204,144,.1)',
      }
    case 'put':
      return {
        normal: '#fca130',
        lighter: 'rgba(252,161,48,.1)',
      }
    case 'patch':
      return {
        normal: 'purple',
        lighter: 'lavender',
      }
    case 'delete':
      return {
        normal: '#f93e3e',
        lighter: 'rgba(249,62,62,.1)',
      }
    default:
      return {
        normal: '#fff',
        lighter: '#fff',
      }
  }
}

const Verb = ({ value, style }) => {
  const verbStyle = {
    padding: '0.2rem 0.5rem',
    backgroundColor: verbColor(value).normal,
    color: '#fff',
  }

  return <g.P css={Object.assign(verbStyle, style)}>{value.toUpperCase()}</g.P>
}

export default Verb