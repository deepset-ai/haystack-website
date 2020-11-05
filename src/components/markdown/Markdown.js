import React from 'react'
import PropTypes from 'prop-types'
import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'

const Markdown = ({ markdown }) => {
  return (
    <div>
      {
        unified()
          .use(parse)
          .use(remark2react)
          .processSync(markdown).result
      }
    </div>
  )
}

Markdown.propTypes = {
  markdown: PropTypes.string.isRequired,
}

export default Markdown