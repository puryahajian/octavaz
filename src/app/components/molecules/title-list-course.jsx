import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'

function TitleListCourse() {
  return (
    <div className='flex justify-between items-center p-4'>
      <Title className={`text-greenCostom`}>اطلاعات دوره</Title>
      <div className='flex gap-20'>
        <Text>۷ فصل</Text>
        <Text>۱۳ ساعت</Text>
      </div>
    </div>
  )
}

export default TitleListCourse
