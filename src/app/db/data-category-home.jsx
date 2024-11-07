"use client"

import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import interceptor from '@/app/lib/interceptor';
import { useDispatch } from 'react-redux';
import { setCategoryId } from '@/store/counterSlice';

const DataCategoryHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [dataCategory, setDataCategory] = useState();
  const dispatch = useDispatch();

  const { data, error, isLoading } = useQuery({
    queryKey: ['dataCategoryHome'],
    queryFn: async () => {
      const response = await interceptor.get('course/categories/');
      return response.data;
    }
  });

  useEffect(() => {
    if (data) setDataCategory(data.results);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  console.log(data)

  const handleCategoryClick = (activeTab) => {
    dispatch(setCategoryId(activeTab));
  };

  const numItems = dataCategory ? dataCategory.length : 0;
  const gridCols = numItems === 0 ? 1 : Math.min(numItems, 5);

  return (
    <div className={`gap-2 cursor-pointer mb-4 grid grid-cols-${gridCols} max-[1200px]:grid-cols-3 max-[770px]:grid-cols-2`}>
      {dataCategory && dataCategory.map((category, index) => (
        <div
          key={category.id}
          className={`rounded-lg flex justify-center items-center text-gray-400 text-sm font-sans py-2 border !border-neutral-500 transition-all ${activeTab === index ? "border-colorbordercategory text-white bg-bgcategory" : ""}`}
          onClick={() => {
            handleCategoryClick(category.id)
            setActiveTab(index)
            }
          }
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default DataCategoryHome;
