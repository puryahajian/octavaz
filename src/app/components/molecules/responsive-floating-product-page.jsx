
import React from 'react'
import Title from '../atoms/title'
import ButtonGeneral from '../atoms/button-general'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Text from '../atoms/text';
import VideoPlayer from './video-player';
import InputCheckbox from '../atoms/input-checkbox'

function ResponsiveFloatingProductPage() {
  return (
    <div className=' w-full my-4 max-[770px]:block max-[5000px]:hidden'>
      <div className=' bg-colorBgItemProductPage sticky top-[90px] bottom-0 rounded'>
        <div className='h-fit'>
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
          <Title className={`flex items-center gap-1 text-Custom`}>2,000,000<Text>تومان</Text></Title>
        </div>
        <ButtonGeneral className={`w-full !rounded-b-md rounded-none`}>افزودن به سبد خرید</ButtonGeneral>
      </div>
    </div>
  )
}

export default ResponsiveFloatingProductPage
