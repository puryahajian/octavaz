import React from 'react'
import Breadcrumb from './breadcrumbs';
import Footer from '../template/footer';
import Header from '../template/Header';
import ProductPageTemplate from '../template/product-page-template';
import TemplateBoxMain from '../template/template-box-main';

function OrganismProductIdPage() {
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

export default OrganismProductIdPage
