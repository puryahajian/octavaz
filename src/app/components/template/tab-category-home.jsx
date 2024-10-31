"use client"

import React from 'react'
import DataCategoryHome from '@/app/db/data-category-home';
import DataSubCategoryHome from '@/app/db/data-subcategory-home';

function TabCategoryHome() {
 

  return (
    <div className="w-full mt-4 font-sans">
      <DataCategoryHome/>
      <div className=" flex gap-4 grid-cols-3 max-[990px]:grid max-[990px]:grid-cols-2 max-[770px]:grid-cols-1 ">
        <DataSubCategoryHome/>
      </div>
    </div>
  )
}

export default TabCategoryHome
