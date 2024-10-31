import React from 'react'
import Title from '../atoms/title'
import ButtonGeneral from '../atoms/button-general'
import SocialMedia from '../organisms/social-media';
import Text from '../atoms/text';
import FooterSizeTabletMobile from '../organisms/footer-size-tablet';

function Footer() {

    const styleText = {
        fontSize: '13px',
        color: 'white'
    }

    return (
        <div className='bg-bgmain mt-20 px-4 py-16 !text-white'>
            <div className=' border-b border-b-gray-400 pb-4 max-w-[1120px] m-auto flex grid-cols-2 max-[990px]:grid max-[990px]:grid-cols-1 max-[990px]:pb-4  max-[990px]:gap-4'>
                <div className='grid gap-2 max-[990px]:border-b max-[990px]:pb-3 border-b-gray-400 max-[990px]:gap-5'>
                    <Title className={`text-white`}>INVERS</Title>
                    <div className='max-[780px]:hidden'>
                        <ButtonGeneral className={`w-full flex justify-center items-center gap-2 max-[990px]:w-max max-[990px]:!px-16 max-[990px]:py-4 `}>
                            مرکز پشتیبانی
                            <img src={`https://inverseschool.com/assets/images/markaz-poshtibani.png`} alt="" />
                        </ButtonGeneral>
                        <SocialMedia/>
                    </div>
                </div>
                <div className='w-full'> 
                    <div className='flex w-full grid-cols-4 Desktop max-[990px]:hidden'>
                        <div className='w-full mr-10 max-[990px]:mr-0 grid gap-2'>
                            <Title style={styleText}>خانه</Title>
                            <Title style={styleText}>دوره ها</Title>
                            <Title style={styleText}>مسئولیت اجتماعی</Title>
                            <Title style={styleText}>فرصت های شغلی</Title>
                        </div>
                        <div className='w-full grid gap-2'>
                            <Title style={styleText}>قوانین</Title>
                            <Title style={styleText}>راهنمای خرید دوره</Title>
                            <Title style={styleText}>بلاگ</Title>
                            <Title style={styleText}>درباره ما</Title>
                        </div>
                        <div className='w-full grid gap-2'>
                            <Title style={styleText}>استعلام مدرک</Title>
                            <Title style={styleText}>مدرک بین المللی</Title>
                            <Title style={styleText}>ثبت نام/ورود</Title>
                            <Title style={styleText}>دوره های سازمانی</Title>
                        </div>
                        <div className='w-full '>
                            <Title style={styleText}>سوالات متداول</Title>
                        </div>
                    </div>
                    <FooterSizeTabletMobile/>
                </div>
            </div>
            <div className='mobile grid gap-4 pt-4 max-[20000px]:hidden max-sm:grid'>
                <ButtonGeneral className={`w-full flex justify-center items-center gap-2`}>
                    مرکز پشتیبانی
                    <img src={`https://inverseschool.com/assets/images/markaz-poshtibani.png`} alt="" />
                </ButtonGeneral>
                <SocialMedia/>
            </div>
            <div className='max-w-[1120px] m-auto flex mt-4 justify-center'>
                <Text className={`max-sm:text-[9px]`}>کلیه حقوق این سایت متعلق به آموزشگاه اکتاواز (فکر نو) می باشد.</Text>
            </div>
        </div>
    )
}

export default Footer
