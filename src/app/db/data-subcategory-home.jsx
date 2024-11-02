"use client"

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import interceptor from '../lib/interceptor';
import ContentTabCategory from '../components/organisms/content-tab-category';
import { useSelector } from 'react-redux';

function DataSubCategoryHome() {
    const categoryId = useSelector((state) => state.category.categoryId || 1);

    const [dataCategory, setDataCategory] = useState();

    const { data, error, isLoading } = useQuery({
        queryKey: ['dataSubCategoryHome', categoryId],
        queryFn: async () => {
            const response = await interceptor.get(`courses/?category=${categoryId}`);
            return response.data;
        }
    });

    useEffect(() => {
    if (data) setDataCategory(data.results);
    }, [data]);

    if (isLoading) return <div>Loading...</div>;
    
    if (data && data.results.length === 0) return <div>فیلد خالی</div>;

    if (error) return <div>Error: {error.message}</div>;
    return (
        <ContentTabCategory dataCategory={dataCategory}/>
    )
}

export default DataSubCategoryHome
