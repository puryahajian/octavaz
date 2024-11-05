"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import StarFeedback from '../atoms/star-feedback';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';

function AboutProduct() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);
  return (
    <div className=' p-4 bg-colorBgItemProductPage rounded'>
      {storedDataCategory.map((item) => (
        <>
          <div className='flex justify-between items-center'>
            <Title className={`text-[25px] text-greenCostom`}>{item.name}</Title>
            <BookmarkBorderIcon sx={{fontSize: '40px', color: '#65a8d2'}}/>
          </div>
          <Text className={`mt-8 text-justify`}>{item.description}</Text>
      
          <div className='flex gap-3 items-center mt-4 flex-wrap'>
            <StarFeedback rating={item.rating}/>
            <div className='flex gap-2 items-center'>
              <PersonIcon sx={{color: '#65a8d2'}}/>
              <Text>استاد</Text>
            </div>
            <div className='flex gap-2 items-center'>
              <PublicIcon sx={{color: '#65a8d2'}}/>
              <Text>فارسی</Text>
            </div>
            <div className='flex gap-2 items-center'>
              <MenuIcon sx={{color: '#65a8d2'}}/>
              <Text>سطح</Text>
            </div>
          </div>
        </>

      ))}
    </div>
  )
}

export default AboutProduct
