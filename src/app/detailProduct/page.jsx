import React from 'react'
import Header from '../components/template/Header'
import Breadcrumb from '../components/organisms/breadcrumbs'
import TemplateDetailInfoProduct from '../components/template/template-detail-info-product'

function DetailProduct() {
  return (
    <div>
      <Header/>
      <div className='border border-white max-w-[1135px] m-auto'>
        <Breadcrumb/>
        <TemplateDetailInfoProduct/>
      </div>
    </div>
  )
}

export default DetailProduct
