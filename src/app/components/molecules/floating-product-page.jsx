"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import ButtonGeneral from '../atoms/button-general'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VideoPlayer from './video-player'
import { useSelector } from 'react-redux';

function FloatingProductPage() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);

  return (
    <div className=' w-3/12 max-[770px]:hidden'>
      <div className=' bg-colorBgItemProductPage sticky top-[90px] bottom-0 rounded'>
        {storedDataCategory.map((item)=> (
          <>
            <div className='h-32 w-full'>
              <VideoPlayer/>
            </div>
            <div className='p-2'>
              <Title className={`flex items-center gap-1 text-greenCostom`}>{item.price}<Text>تومان</Text></Title>
            </div>
            <ButtonGeneral className={`w-full rounded-none`}>افزودن به سبد خرید</ButtonGeneral>
            <div className='p-2'>
              <Title className={`mt-3`}>این دوره شامل</Title>
              <ul className='mt-3 grid gap-2'>
                <li className='flex items-center gap-1'>
                  <PlayCircleIcon sx={{fontSize: '18px', color: '#65a8d2'}}/>
                  <Text>۷ فصل</Text>
                </li>
                <li className='flex items-center gap-1'>
                  <PlayCircleIcon sx={{fontSize: '18px', color: '#65a8d2'}}/>
                  <Text>۶۴ درس</Text>
                </li>
                <li className='flex items-center gap-1'>
                  <PlayCircleIcon sx={{fontSize: '18px', color: '#65a8d2'}}/>
                  <Text>گواهی پایان ترم</Text>
                </li>
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default FloatingProductPage
