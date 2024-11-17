import React from 'react'
import Title from '../atoms/title';
import Text from '../atoms/text'
import ReceiptIcon from '@mui/icons-material/Receipt';

function FinancialReportDashboard() {
  const style = {
    width: '16.666667%',
    padding: '8px 0',
  }
  return (
    <div className=''>
      <div className='flex gap-2'>
        <ReceiptIcon className='text-Custom'/>
        <Title Title className={`text-lg text-Custom`}>لیست تراکنش ها</Title>
      </div>

      <div className=' mt-6 overflow-scroll'>
        <div className='w-full flex text-center max-[800px]:w-[800px]'>
          <div style={style}>
            <Text>ردیف</Text>
          </div>
          <div style={style}>
            <Text>مبلغ</Text>
          </div>
          <div style={style} className='!w-1/4'>
            <Text>مبلغ پرداخت شده</Text>
          </div>
          <div style={style}>
            <Text>تاریخ</Text>
          </div>
          <div style={style}>
            <Text>بابت</Text>
          </div>
          <div style={style}>
            <Text>کد پیگیری</Text>
          </div>
          <div style={style}>
            <Text>مشاهده فاکتور</Text>
          </div>
        </div>

        <div className='w-full border-t !border-t-slate-500 flex text-center max-[800px]:w-[800px]'>
          <div style={style}>
            <Text>1</Text>
          </div>
          <div style={style}>
            <Text>2222</Text>
          </div>
          <div style={style} className='!w-1/4'>
            <Text>22222</Text>
          </div>
          <div style={style}>
            <Text>22</Text>
          </div>
          <div style={style}>
            <Text>dddd</Text>
          </div>
          <div style={style}>
            <Text>11111</Text>
          </div>
          <div style={style}>
            <Text>مشاهده فاکتور</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialReportDashboard
