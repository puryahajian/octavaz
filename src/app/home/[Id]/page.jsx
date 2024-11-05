
import Breadcrumb from '@/app/components/organisms/breadcrumbs';
import Footer from '@/app/components/template/footer';
import Header from '@/app/components/template/Header';
import ProductPageTemplate from '@/app/components/template/product-page-template';
import React from 'react';


function ProductId({params}) {
  console.log(params)
  return (
    <div>
      <Header/>
      <div className=' mt-9 max-w-[1135px] m-auto'>
        <Breadcrumb/>
        <div className=' mt-4 '>
          <ProductPageTemplate/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductId
