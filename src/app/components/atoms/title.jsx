import React from 'react'

function Title({children, className,style}) {
  return (
    <h2 style={style} className={`${className} text-lg font-sans font-medium text-colortitle`}>
      {children}
    </h2>
  )
}

export default Title
