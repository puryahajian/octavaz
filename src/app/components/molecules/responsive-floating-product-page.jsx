
import React from 'react'
import Title from '../atoms/title'
import ButtonGeneral from '../atoms/button-general'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Text from '../atoms/text';
import VideoPlayer from './video-player';

function ResponsiveFloatingProductPage() {
  return (
    <div className=' w-full my-4 max-[770px]:block max-2xl:hidden'>
      <div className=' bg-colorBgItemProductPage sticky top-[90px] bottom-0 rounded'>
        <div className='h-32 border border-red-500'>
          <VideoPlayer/>
        </div>
        <div className='p-2'>
          <Title className={`flex items-center gap-1 text-greenCostom`}>2,000,000<Text>تومان</Text></Title>
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
      </div>
    </div>
  )
}

export default ResponsiveFloatingProductPage
