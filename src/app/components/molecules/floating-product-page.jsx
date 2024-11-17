"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import ButtonGeneral from '../atoms/button-general'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InputCheckbox from '../atoms/input-checkbox'
import VideoPlayer from './video-player'
import { useSelector } from 'react-redux';

function FloatingProductPage() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);

  return (
    <div className=' w-3/12 max-[770px]:hidden'>
      <div className=' bg-colorBgItemProductPage sticky top-[90px] bottom-0 rounded'>
        {storedDataCategory.map((item)=> (
          <>
            <div className='h-fit w-fit'>
              <VideoPlayer/>
            </div>
           
            <div className='p-2 '>
              <Title className={`text-lg text-center mb-2`}>انتخاب کنبد</Title>
              <div className=' grid gap-3'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <InputCheckbox />
                    <Text>سطح یکم</Text>
                  </div>
                  <div>
                    <ButtonGeneral className={`py-1 !px-2 bg-transparent border !border-Custom !text-Custom !text-xs`}>سر فصل ها</ButtonGeneral>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <InputCheckbox />
                    <Text>سطح دوم</Text>
                  </div>
                  <div>
                    <ButtonGeneral className={`py-1 !px-2 bg-transparent border !border-Custom !text-Custom !text-xs`}>سر فصل ها</ButtonGeneral>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-2'>
              <Title className={`flex text-base items-center gap-1 text-Custom`}>{item.price}<Text>تومان</Text></Title>
            </div>
            <ButtonGeneral className={`w-full !rounded-b-md rounded-none`}>افزودن به سبد خرید</ButtonGeneral>
          </>
        ))}
      </div>
    </div>
  )
}

export default FloatingProductPage
