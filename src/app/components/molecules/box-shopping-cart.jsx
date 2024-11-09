"use client"

import React from 'react'
import Title from '../atoms/title'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Text from '../atoms/text';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGeneral from '../atoms/button-general';
import Footer from '../template/footer';
import TemplateBoxMain from '../template/template-box-main';

function BoxShoppingCart() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (
        <>
            <TemplateBoxMain>
                <Title className={`gap-2 flex items-center text-greenCostom`}>
                    <ShoppingCartIcon/>
                    سبد خرید
                </Title>

                <Accordion
                    expanded={expanded}
                    onChange={handleExpansion}
                    // slots={{ transition: Fade }}
                    slotProps={{ transition: { timeout: 400 } }}
                    sx={[
                    expanded
                        ? {
                            '& .MuiAccordion-region': {
                            height: 'auto',
                            },
                            '& .MuiAccordionDetails-root': {
                            display: 'block',
                            },
                        }
                        : {
                            '& .MuiAccordion-region': {
                            height: 0,
                            },
                            '& .MuiAccordionDetails-root': {
                            display: 'none',
                            },
                        },
                        {backgroundColor: '#303545'},
                    ]}
                >
                    <AccordionSummary 
                        sx={{
                            backgroundColor: '#353a4b', 
                            borderRadius: '8px', 
                            padding: '8px',
                            marginTop: '16px'
                        }}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        // expandIcon={<ExpandMoreIcon />}
                    >
                        <div className='flex justify-between w-full max-[770px]:block'>
                            <Text className={`text-greenCostom`}>Custom transition using Fade</Text>
                            <Text className={`max-[770px]:hidden`}>توضیحات</Text>
                            <div className='flex gap-20 ml-2 max-[770px]:w-full max-[770px]:justify-between max-[770px]:mt-4'>
                                <Text className={`flex gap-2`}>قیمت دوره: <Text className={`text-greenCostom`}>۲۰۰۰۰</Text> تومان</Text>
                                <DeleteIcon className='text-greenCostom'/>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails 
                        sx={{
                            backgroundColor: '#353a4b', 
                            borderRadius: '8px', 
                            marginTop: '10px',
                            padding: '0'
                        }}
                    >
                        <div className='flex justify-between w-full items-center max-[770px]:block'>
                            <div className='w-1/4 max-[770px]:w-full'>
                                <img 
                                    src='https://inverseschool.com/assets/course/2024/10/08/image67045a84eabc6.jpg' 
                                    className='w-full h-max'
                                />
                            </div>
                            <div className='w-1/2 p-4 max-[770px]:w-full'>
                                <Text className={`text-justify`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد</Text>
                            </div>
                            <div className='w-1/4 p-4 max-[770px]:w-full'>
                                <Text className={`flex gap-2`}>مدرس: <Text className={`text-greenCostom`}>لورم ایپسوم</Text></Text>
                                <Text className={`flex gap-2`}>تعداد فصل:<Text className={`text-greenCostom`}> 2</Text></Text>
                                <Text className={`flex gap-2`}>تعداد درس:<Text className={`text-greenCostom`}> 2</Text></Text>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <div className='w-full mt-4 flex justify-end gap-2'>
                    <ButtonGeneral className={`bg-transparent border !border-greenCostom !text-greenCostom`}>
                        ادامه فرایند خرید
                    </ButtonGeneral>
                    <ButtonGeneral className={`!bg-colorBgItemProductPage`}>
                        <Text>
                            بازگشت
                        </Text>
                    </ButtonGeneral>
                </div>
            </TemplateBoxMain>
            <Footer/>
        </>
    )
}

export default BoxShoppingCart
