import React from 'react'
import DetailInfoProduct from '../organisms/detail-info-product'
import FloatingDetailProduct from '../organisms/floating-detail-product'

function TemplateDetailInfoProduct() {
  return (
    <div className='border border-white mt-4 flex gap-12'>
        <DetailInfoProduct/>
        <FloatingDetailProduct/>
    </div>
  )
}

export default TemplateDetailInfoProduct
