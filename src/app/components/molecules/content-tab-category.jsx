"use client"

import React, { useState } from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import StarFeedback from '../atoms/star-feedback'
import ButtonGeneral from '../atoms/button-general'
import Link from 'next/link'
import { Skeleton } from '@mui/material'

function ContentTabCategory({dataSubCategory}) {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <>
            {dataSubCategory && dataSubCategory.map((item) => ( 
                <div className='w-max rounded-lg max-[990px]:w-full' key={item.id}>
                    <div className='w-full h-max'>
                        {loading && <Skeleton variant="rectangular" width={360} height={208} animation="wave" />}
                        <img
                            src={item.image}
                            className={`w-[360px] h-52 rounded-t-lg max-[770px]:h-72 max-[990px]:w-full ${loading ? 'hidden' : ''}`}
                            alt=""
                            onLoad={handleLoad}
                        />
                    </div>
                    <div className='p-3 grid gap-3 bg-bgslowblack rounded-b-lg'>
                        <Link href={`/home/${item.id}`}>
                            <Title className={`text-base text-white`}>{item.name}</Title>
                        </Link>
                        <div className='flex justify-between items-center'>
                            <Text>{item.artist}</Text>
                            <StarFeedback rating={item.rating}/>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Text>5 فصل</Text>
                            <Text>{item.rating} درس</Text>
                        </div>
                        <div className='grid grid-cols-1 items-center'>
                            <Title className={`text-base text-white hidden`}></Title>
                            
                            <ButtonGeneral>
                                <Link href={`/home/${item.id}`}>
                                    مشاهده بیشتر
                                </Link>
                            </ButtonGeneral>
                        </div>
                    </div>
                </div>  
            ))}
        </>
    )
}

export default ContentTabCategory
