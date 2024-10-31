import React from 'react'

function Text({children, className, style}) {
  return (
    <p style={style} className={`${className} text-gray-400 text-sm font-sans`}>
        {children}
    </p>
  )
}

export default Text
