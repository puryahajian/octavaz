import React from 'react'

function Title({children, className,style}) {
  return (
    <h2 style={style} className={`${className} text-2xl font-sans font-bold text-colortitle`}>
      {children}
    </h2>
  )
}

export default Title
