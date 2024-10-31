import React from 'react'
import Title from '../atoms/title'

function FooterSizeTablet() {
    const styleText = {
        fontSize: '13px',
        color: 'white'
    }
    return (
        <div className='flex w-full grid-cols-3 Tablet max-[30000px]:hidden max-[990px]:flex max-sm:grid-cols-1 max-sm:grid'>
            <ul className='w-full mr-10 max-[990px]:mr-0 gap-2 grid h-max'>
                <li><Title style={styleText}>خانه</Title></li>
                <li><Title style={styleText}>دوره ها</Title></li>
                <li><Title style={styleText}>مسئولیت اجتماعی</Title></li>
                <li><Title style={styleText}>فرصت های شغلی</Title></li>
                <li><Title style={styleText}>قوانین</Title></li>
                <li><Title style={styleText}>راهنمای خرید دوره</Title></li>
                <li><Title style={styleText}>دوره های سازمانی</Title></li>
                <li><hr className='w-36' /></li>
            </ul>
            <ul className='w-full grid gap-1 h-max'>
                <li><Title style={styleText}>استعلام مدرک</Title></li>
                <li><Title style={styleText}>بلاگ</Title></li>
                <li><Title style={styleText}>درباره ما</Title></li>
                <li><Title style={styleText}>مدرک بین المللی</Title></li>
                <li><Title style={styleText}>ثبت نام/ورود</Title></li>
                <li><hr className='w-36' /></li>
            </ul>
            <div className='w-full '>
                <Title style={styleText}>سوالات متداول</Title>
            </div>
        </div>
    )
}

export default FooterSizeTablet
