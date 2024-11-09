
import Breadcrumb from '@/app/components/organisms/breadcrumbs';
import Footer from '@/app/components/template/footer';
import Header from '@/app/components/template/Header';
import ProductPageTemplate from '@/app/components/template/product-page-template';
import TemplateBoxMain from '@/app/components/template/template-box-main';
import React from 'react';


function ProductId() {
  return (
    <div>
      <Header/>
      <TemplateBoxMain>
        <Breadcrumb/>
        <div className=' mt-4 '>
          <ProductPageTemplate/>
        </div>
      </TemplateBoxMain>
      <Footer/>
    </div>
  )
}

export default ProductId
