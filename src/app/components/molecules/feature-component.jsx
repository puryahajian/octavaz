import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import StarFeedback from '../atoms/star-feedback'

function FeatureComponent() {
    return (
        <div className=' rounded-lg max-[770px]:w-full'>
            <div className=''>
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuS8AimFv-GUOXPAeo6uz-2YIl9btD5P2xzA&s`} className=' h-52 rounded-t-lg max-[770px]:w-full' alt="" />
            </div>
            <div className=' p-3 grid gap-3 bg-bgslowblack rounded-b-lg'>
                <Title className={`text-base text-white`}>اشنایی با قرارداد های فریلنسری</Title>
                <div className='flex justify-between items-center'>
                    <Text>لورم ایپسوم</Text>
                    <StarFeedback/>
                </div>
            </div>
        </div>
    )
}

export default FeatureComponent
