"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import { useSelector } from 'react-redux';

function CourseRequirements() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);

  return (
    <div className='mt-4 p-4 bg-colorBgItemProductPage rounded'>
      {storedDataCategory.map((item)=> (
        <>
          <Title className={`text-greenCostom`}>الزامات دوره</Title>
          <Text className={`text-justify mt-6`}>
            {item.course_requirements}
          </Text>
        </>
      ))}
    </div>
  )
}

export default CourseRequirements
