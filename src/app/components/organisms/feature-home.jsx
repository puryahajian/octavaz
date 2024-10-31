import React from 'react'
import FeatureComponent from './feature-component'
import Title from '../atoms/title'

function FeatureHome() {
    return (
        <div className='!mt-20 m-auto px-3 max-w-[1160px] max-sm:px-3'>
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

export default FeatureHome
