"use client"

import React, { useState } from 'react'
import Title from '../atoms/title'
import StarIcon from '@mui/icons-material/Star';
import Text from '../atoms/text';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PublicIcon from '@mui/icons-material/Public';
import { Skeleton } from '@mui/material';

function AbouteTacherProductPage() {
    const [loading, setLoading] = useState(true);
    const handleLoad = () => {
        setLoading(false);
    };

    const styleUi = {
        display : 'flex',
        justifyContent: 'space-between',
        with: '100%',
    }

    return (
        <div className='mt-8'>
            <Title className={`text-greenCostom`}>درمورد مدرس</Title>
            <div className='flex gap-4 mt-4 flex-wrap'>
                <div>
                    <div className='w-24 h-24'>
                        <img 
                            src="" 
                            alt="" 
                            className={`border border-red-500 w-full h-full rounded-lg ${loading ? 'hidden' : ''}`}
                            onLoad={handleLoad}
                        />
                        {loading && <Skeleton variant="rectangular" width="100%" height="100%" animation="wave" />}
                    </div>

                    <ul className='mt-4 grid gap-1'>
                        <li style={styleUi}>
                            <StarIcon sx={{fontSize: '16px', color: '#f4c150'}}/>
                            <Text>۳ امتیاز</Text>
                        </li>
                        <li style={styleUi}>
                            <ChatBubbleIcon sx={{fontSize: '16px', color: '#65a8d2'}}/>
                            <Text>0 نظر</Text>
                        </li>
                        <li style={styleUi}>
                            <PublicIcon sx={{fontSize: '16px', color: '#65a8d2'}}/>
                            <Text>1 ادرس</Text>
                        </li>
                    </ul>
                </div>
                <div className=' pt-2'>
                    <Title className={`text-greenCostom`}>مانی حقیقی، حمید نعمت‌الله، شهرام مکری، کیانوش عیاری، مجید برزگر</Title>
                </div>
            </div>
        </div>
    )
}

export default AbouteTacherProductPage
