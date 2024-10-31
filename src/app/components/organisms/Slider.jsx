"use client";

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../globals.css';
import ButtonGeneral from '../atoms/button-general';

const SlideContent = ({ title, buttonText, imageUrl }) => (
  <>
    <img src={imageUrl} className='w-full h-dvh' alt={title} />
    <div className='text-white absolute w-[850px] max-w-[95%] m-auto h-max top-[35%] grid gap-4 flex-wrap ml-6 text-right'>
        <h1 className='font-sans text-6xl font-bold'>{title}</h1>
        <ButtonGeneral className={`w-max !bg-bggray !text-black text-base hover:!bg-greenCostom hover:!text-white hover:transition-all`}>
          {buttonText}
        </ButtonGeneral>
    </div>
  </>
);

const SliderMain = () => {
  return (
    <Carousel fade className='w-full h-max ' interval={5000} wrap={true}>
      <Carousel.Item className='h-dvh'>
        <Carousel.Caption className='h-dvh !left-0 !right-0 relative'>
          <div className='m-auto flex justify-center'>
            <SlideContent
              title='لورم ایپسوم'
              buttonText='مشاهده بیشتر'
              imageUrl='https://inverseschool.com/assets/images/banner/slider-test1.jfif?quality=highest'
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-dvh'>
        <Carousel.Caption className='h-dvh !left-0 !right-0 absolute'>
          <div className='m-auto flex justify-center'>
            <SlideContent
              title='لورم'
              buttonText='مشاهده بیشتر'
              imageUrl='https://cdn.nody.ir/files/2021/10/13/nody-%D8%B9%DA%A9%D8%B3-%D8%AF%D8%AE%D8%AA%D8%B1-%D8%A8%D8%A7-%DA%AF%DB%8C%D8%AA%D8%A7%D8%B1-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7-1634153386.jpg'
            />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderMain;
