"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import { useSelector } from 'react-redux';

function DescriptionProduct() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);

  return (
    <div className='mt-4 p-4 bg-colorBgItemProductPage rounded'>
      {storedDataCategory.map((item)=> (
        <>
          <Title className={`text-Custom`}>توضیحات دوره</Title>
          <Text className={`text-justify mt-6`}>{item.description}</Text>
        </>
      ))}
    </div>
  )
}

export default DescriptionProduct
