import React from 'react'

const Button = ({ onClick, children, outline }) => {
  const outlineStyles = 'd-flex, border color-orange'
  const primaryStyles = 'd-flex, background-orange color-white'

  const classes = outline ? outlineStyles : primaryStyles

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

export default Button
