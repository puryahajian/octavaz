import React from 'react'
import Title from '../atoms/title'
import Text from '../atoms/text'

function DetailInfoProduct() {
  return (
    <div className='border border-red-600 w-10/12'>
        <div className='border border-white'>
            <Title>مسترکلاس جرات فیلم‌سازی</Title>
            <Text className={`mt-4`}>جرئت فیلم‌سازی یک مسترکلاس جامع و منحصربه‌فرد است که توسط پنج کارگردان برجستهٔ ایرانی—مانی حقیقی، حمید نعمت‌الله، شهرام مکری، کیانوش عیاری و مجید برزگر—با راهبری نیما حسنی‌نسب طراحی شده است. این دورهٔ ۲۰ ساعته به هنرجویان و علاقه‌مندان فیلم‌سازی فرصتی استثنایی می‌دهد تا از تجارب عملی و بومی این اساتید نام‌آشنا برای تبدیل ایده‌های خود به فیلم بهره‌مند شوند.</Text>
        </div>
    </div>
  )
}

export default DetailInfoProduct
