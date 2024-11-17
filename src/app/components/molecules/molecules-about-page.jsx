import React from 'react'
import Header from '../template/Header'
import Title from '../atoms/title'
import Text from '../atoms/text'
import Footer from '../template/footer'
import TemplateBoxMain from '../template/template-box-main'

function MoleculesAboutPage() {
    return (
        <div>
            <Header/>
            <TemplateBoxMain className={`!mt-14`}>
                <Title className={`text-Custom`}>درباره ما</Title>

                <Title className={`text-Custom mt-4`}>داستان اکتاواز</Title>

                <Text className={`mt-4 text-lg text-justify`}>
                    در 17 آذر 1387، مدرسه اکتاواز  به عنوان اولین مدرسه تخصصی هنرهای دیجیتال در ایران راه‌اندازی شد. هدف ما ایجاد تغییری جدی در بستر آموزش هنر و دیزاین بود.
                    در راستای این رویای بزرگ، ما امروز مدرسه‌ای پیشرو در صنعت آموزش هستیم و در طی این سال‌ها، موفق شده‌ایم هنرجویانی تربیت و بزرگ کنیم، که پیشروان صنعت‌های دیگر باشند.
                </Text>


                <Title className={`mt-14 text-Custom`}>ارزش‌ها و ماموریت اکتاواز</Title>
                
                <div className='flex items-center gap-4 mt-4 max-[770px]:flex-wrap'>
                <img src='https://inverseschool.com/assets/images/about/1.png' alt="" />
                <div>
                    <Title className={`text-Custom`}>تجربه‌ای متفاوت</Title>
                    <Text className={`text-justify mt-4`}>
                        ما یک سیستم آموزشی با توجه به نیازهای بازار کار ایران و جهان طراحی کرده‌ایم. هنرجویی که وارد اینورس می‌شود، آموزشی خاص و متفاوت را تجربه می‌کند و نهایتا با دستی پر از ابزار و اطلاعات کارآمد، وارد بازار کار می‌شود.
                    </Text>
                </div>
                </div>
            </TemplateBoxMain>
            <Footer/>
        </div>
    )
}

export default MoleculesAboutPage
