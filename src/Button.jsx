import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button>{props.name}</button>
  )
}
Button.defaultProps = {
    name : "Default"
}

export default Button