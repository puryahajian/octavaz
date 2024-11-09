import React from 'react'
import Header from '../components/template/Header'
import SliderMain from '../components/organisms/Slider'
import FeatureHomeTemplate from '../components/template/feature-home-template'
import Title from '../components/atoms/title'
import TabCategoryHome from '../components/template/tab-category-home'
import Footer from '../components/template/footer'
import TemplateBoxMain from '../components/template/template-box-main'

function Home() {
  return (
    <div>
        <Header/>
        <SliderMain/>
        <TemplateBoxMain className={`!mt-14`}>
          <FeatureHomeTemplate/>
          <Title className={`max-[940px]:hidden mt-14`}>دسته بندی دوره ها</Title>
          <TabCategoryHome/>
        </TemplateBoxMain>
        <Footer/>
    </div>
  )
}

export default Home
