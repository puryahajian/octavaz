import React from 'react'

function TemplateBoxMain({children, className}) {
    return (
        <div className={`${className} mt-9 max-w-[1160px] m-auto px-3`}>
            {children}
        </div>
    )
}

export default TemplateBoxMain
