
import React from 'react'
import Header from '../components/template/Header'
import Title from '../components/atoms/title'
import Text from '../components/atoms/text'
import Footer from '../components/template/footer'

function About() {
  return (
    <div>
      <Header/>
      <div className=' !mt-9 max-w-[1135px] m-auto px-3'>
        <Title className={`text-greenCostom`}>درباره ما</Title>
        <Title className={`text-greenCostom mt-4`}>داستان اکتاواز</Title>
        <Text className={`mt-4 text-lg text-justify`}>
            در 17 آذر 1387، مدرسه اکتاواز  به عنوان اولین مدرسه تخصصی هنرهای دیجیتال در ایران راه‌اندازی شد. هدف ما ایجاد تغییری جدی در بستر آموزش هنر و دیزاین بود.
            در راستای این رویای بزرگ، ما امروز مدرسه‌ای پیشرو در صنعت آموزش هستیم و در طی این سال‌ها، موفق شده‌ایم هنرجویانی تربیت و بزرگ کنیم، که پیشروان صنعت‌های دیگر باشند.
        </Text>


        <Title className={`mt-14 text-greenCostom`}>ارزش‌ها و ماموریت اکتاواز</Title>
        <div className='flex items-center gap-4 mt-4 max-[770px]:flex-wrap'>
          <img src='https://inverseschool.com/assets/images/about/1.png' alt="" />
          <div>
              <Title className={`text-greenCostom`}>تجربه‌ای متفاوت</Title>
              <Text className={`text-justify mt-4`}>
                  ما یک سیستم آموزشی با توجه به نیازهای بازار کار ایران و جهان طراحی کرده‌ایم. هنرجویی که وارد اینورس می‌شود، آموزشی خاص و متفاوت را تجربه می‌کند و نهایتا با دستی پر از ابزار و اطلاعات کارآمد، وارد بازار کار می‌شود.
              </Text>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
