"use client"

import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Text from '../atoms/text';

function Breadcrumb() {
  return (
    <div className='border mt-9 bg-white py-3 px-4 rounded-md'>
        <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit">
                  <Typography sx={{ color: 'text.primary', fontFamily: 'sans' }}>
                    خانه
                  </Typography>
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                >
                  <Typography sx={{ color: 'text.primary', fontFamily: 'sans' }}>
                    نرم افزار
                  </Typography>
                </Link>
                <Typography sx={{ color: '#4f4f4fe6', fontFamily: 'sans' }}>
                  مسترکلاس جرات فیلم سازی
                </Typography>
            </Breadcrumbs>
        </div>
    </div>
  )
}

export default Breadcrumb
