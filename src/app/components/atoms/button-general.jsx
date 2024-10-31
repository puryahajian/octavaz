import React from 'react'

function ButtonGeneral({children, className}) {
  return (
    <button className={`${className} py-[12px] px-3 rounded-lg bg-greenCostom text-white font-sans text-sm font-bold`}>
        {children}
    </button>
  )
}

export default ButtonGeneral
