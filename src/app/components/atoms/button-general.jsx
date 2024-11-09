import React from 'react'

function ButtonGeneral({children, className,type}) {
  return (
    <button type={type} className={`${className} py-[12px] px-3 rounded-lg bg-greenCostom text-white flex justify-center items-center font-sans text-sm font-bold`}>
        {children}
    </button>
  )
}

export default ButtonGeneral
