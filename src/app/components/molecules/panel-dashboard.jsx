import React from 'react'
import Title from '../atoms/title'
import AssessmentIcon from '@mui/icons-material/Assessment';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Text from '../atoms/text';

function PanelDashboard() {
    return (
        <div>
            <div className='flex gap-2'>
                <AssessmentIcon className='text-Custom'/>
                <Title Title className={`text-base text-Custom`}>گزارش وضعیت</Title>
            </div>
            <div className=' grid grid-cols-3 text-center mt-6 max-[780px]:grid-cols-2'>
                <div className=''>
                    <StarOutlineOutlinedIcon className='text-Custom text-7xl'/>
                    <Text className={`mt-2`}>پیام های دریافتی</Text>
                    <Text className={`mt-2 text-Custom !text-2xl`}>0</Text>
                </div>
                <div>
                    <CastForEducationOutlinedIcon className='text-Custom text-7xl'/>
                    <Text className={`mt-2`}> تعداد دوره ها</Text>
                    <Text className={`mt-2 text-Custom !text-2xl`}>0</Text>
                </div>
                <div>
                    <ReceiptLongOutlinedIcon className='text-Custom text-7xl'/>
                    <Text className={`mt-2`}> تعداد تراکنش ها</Text>
                    <Text className={`mt-2 text-Custom !text-2xl`}>0</Text>
                </div>
            </div>
        </div>
    )
}

export default PanelDashboard
