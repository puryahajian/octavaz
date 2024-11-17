"use client"

import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'
import { useSelector } from 'react-redux';

function CourseContacts() {
  const storedDataCategory = useSelector((state) => state.dataCategory.dataCategory);

  return (
    <div className='mt-4 p-4 bg-colorBgItemProductPage rounded'>
      {storedDataCategory.map((item)=> (
        <>
          <Title className={`text-Custom`}>مخاطبین دوره</Title>
          <Text className={`text-justify mt-6`}>
            {item.course_contacts}
          </Text>
        </>
      ))}
    </div>
  )
}

export default CourseContacts
