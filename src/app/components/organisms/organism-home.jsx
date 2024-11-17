import React from 'react'
import Header from '../template/Header'
import SliderMain from './Slider'
import FeatureHomeTemplate from '../template/feature-home-template'
import Title from '../atoms/title'
import TabCategoryHome from '../template/tab-category-home'
import Footer from '../template/footer'
import TemplateBoxMain from '../template/template-box-main'

function OrganismHome() {
    return (
        <div>
            <Header/>
            <SliderMain/>
            <TemplateBoxMain className={`!mt-14`}>
                {/* <Title className={`max-[940px]:hidden mt-14`}>دسته بندی دوره ها</Title> */}
                <TabCategoryHome/>
                <FeatureHomeTemplate/>
            </TemplateBoxMain>
            <Footer/>
        </div>
    )
}

export default OrganismHome
