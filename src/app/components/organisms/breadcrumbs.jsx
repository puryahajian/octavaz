
import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Breadcrumb() {
  return (
    <div className=' border bg-white py-3 px-4 mt-4 rounded-md max-[770px]:mx-4'>
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
