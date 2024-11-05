import React from 'react'
import DetailProduct from '../organisms/detail-product-page'
import FloatingProductPage from '../molecules/floating-product-page'

function ProductPageTemplate() {
  return (
    <div className='flex gap-9'>
      <DetailProduct/>
      <FloatingProductPage/>
    </div>
  )
}

export default ProductPageTemplate
