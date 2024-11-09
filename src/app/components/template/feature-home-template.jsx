import React from 'react'
import FeatureComponent from '../molecules/feature-component'
import Title from '../atoms/title'

function FeatureHomeTemplate() {
    return (
        <div>
            <Title className={`mb-4`}>دوره های جامع اکتاواز</Title>
            <div className="w-full m-auto flex justify-center">
                <div className='grid grid-cols-3 max-[990px]:grid-cols-2 max-[770px]:grid-cols-1 gap-4 max-[770px]:w-full'>
                    <FeatureComponent/>
                    <FeatureComponent/>
                    <FeatureComponent/>
                </div>
            </div>
        </div>
    )
}

export default FeatureHomeTemplate
