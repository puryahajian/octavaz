"use client"

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import interceptor from '../lib/interceptor';
import ContentTabCategory from '../components/molecules/content-tab-category';
import { useDispatch, useSelector } from 'react-redux';
import { setDataCategory } from '@/store/counterSlice';

function DataSubCategoryHome() {
    const [dataSubCategory, setDataSubCategoryLocal] = useState();
    const dispatch = useDispatch();

    const categoryId = useSelector((state) => state.category.categoryId || 1);


    const { data, error, isLoading } = useQuery({
        queryKey: ['dataSubCategoryHome', categoryId],
        queryFn: async () => {
            const response = await interceptor.get(`course/courses/?category=${categoryId}`);
            return response.data;
        }
    });

    useEffect(() => {
        if (data) {
            setDataSubCategoryLocal(data.results);
            dispatch(setDataCategory(data.results));
        }
    }, [data]);
    

    if (isLoading) return <div className='w-full text-center text-white'>Loading...</div>;
    
    if (data && data.results.length === 0) return <div className='w-full text-center'>فیلد خالی</div>;

    if (error) return <div className='w-full text-center text-white'>Error: {error.message}</div>;
    return (
        <>
            <ContentTabCategory dataSubCategory={dataSubCategory}/>
        </>
    )
}

export default DataSubCategoryHome
