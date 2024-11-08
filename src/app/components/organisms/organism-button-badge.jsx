"use client"

import React, { useState } from 'react'
import ButtonBadge from '../molecules/button-badge'
import { Badge, Skeleton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Text from '../atoms/text';
import '../../globals.css'
import ButtonGeneral from '../atoms/button-general';


function OrganismButtonBadge() {
    const [loading, setLoading] = useState(true);

    const handleLoad = () => {
        setLoading(false);
    };

    return (
        <ButtonBadge
            buttonContent={
                <Badge badgeContent={4} color="error">
                <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                </Badge>
            }
        >
            <div className=' w-full px-3 card rounded-none border border-transparent max-h-72 overflow-scroll'>
                <div className='border-b border-stone-600 text-white flex items-center gap-2 my-3 pb-2'>
                    {loading && <Skeleton variant="rectangular" width={64} height={64} animation="wave" />}
                    <img 
                        src="" 
                        alt="" 
                        className={`border-white w-16 h-16 rounded ${loading ? 'hidden' : ''}`} 
                        onLoad={handleLoad}
                    />
                    <div className='grid gap-2'>
                        <Text>اسم محصول</Text>
                        <Text className={`text-white`}>قیمت: ۲۰۰۰ تومان</Text>
                    </div>
                </div>

            </div>
            <div className=' flex items-center gap-4 p-3'>
                <div>
                    <Text>مبلغ قابل پرداخت</Text>
                    <Text className={`text-white font-bold`}>۲۰۰۰۰۰۰ تومان</Text>
                </div>
                <ButtonGeneral className={`w-40 h-9`}>
                    ادامه و ثبت سفارش
                </ButtonGeneral>
            </div>
        </ButtonBadge>
    )
}

export default OrganismButtonBadge
