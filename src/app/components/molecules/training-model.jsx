"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import { useSelector } from 'react-redux';

function TrainingModel() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);

  return (
    <div className='mt-4 p-4 bg-colorBgItemProductPage rounded'>
      {storedDataCategory.map((item)=>(
        <>
          <Title className={`text-greenCostom`}>مدل آموزشی دوره</Title>
          <Text className={`text-justify mt-6`}>
          {item.training_model}
          </Text>
        </>
      ))}
    </div>
  )
}

export default TrainingModel
