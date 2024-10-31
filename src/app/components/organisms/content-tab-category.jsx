
"use client"
import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import StarFeedback from '../atoms/star-feedback'
import ButtonGeneral from '../atoms/button-general'

function ContentTabCategory({dataCategory}) {
    return (
        <>
            {dataCategory && dataCategory.map((item) => ( 
                <div className='w-max rounded-lg max-[990px]:w-full' key={item.id}>
                    <div className='w-full h-max'>
                        <img src={item.image} className='w-[360px] h-52 rounded-t-lg max-[770px]:h-72 max-[990px]:w-full' alt="" />
                    </div>
                    <div className='p-3 grid gap-3 bg-bgslowblack rounded-b-lg'>
                        <Title className={`text-base font-bold text-white`}>{item.name}</Title>
                        <div className='flex justify-between items-center'>
                            <Text>{item.artist}</Text>
                            <StarFeedback/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Text>5 فصل</Text>
                            <Text>{item.rating} درس</Text>
                        </div>
                        <div className='grid grid-cols-2 items-center'>
                            <Title className={`text-base font-bold text-white`}>{item.price} تومان</Title>
                            <ButtonGeneral>افزودن</ButtonGeneral>
                        </div>
                    </div>
                </div>  
            ))}
        </>
    )
}

export default ContentTabCategory
