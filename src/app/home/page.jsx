import React from 'react'
import Header from '../components/template/Header'
import SliderMain from '../components/organisms/Slider'
import FeatureHomeTemplate from '../components/template/feature-home-template'
import Title from '../components/atoms/title'
import TabCategoryHome from '../components/template/tab-category-home'
import Footer from '../components/template/footer'

function Home() {
  return (
    <div>
        <Header/>
        <SliderMain/>
        <FeatureHomeTemplate/>
        <div className="!mt-20 max-w-[1160px] m-auto px-3">
            <Title className={`max-[940px]:hidden`}>دسته بندی دوره ها</Title>
            <TabCategoryHome/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
