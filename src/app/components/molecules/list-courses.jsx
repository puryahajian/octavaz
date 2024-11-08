"use client"

import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Fade from '@mui/material/Fade';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Text from '../atoms/text';

function ListCourses() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className=''>
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
                        padding: '16px'
                    }}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    // expandIcon={<ExpandMoreIcon />}
                >
                    <div className='flex justify-between w-full'>
                        <Text>Custom transition using Fade</Text>
                        <div className='flex gap-20 ml-2'>
                            <Text>فصل ۱</Text>
                            <Text>5 دقیقه</Text>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails 
                    sx={{
                        backgroundColor: '#353a4b', 
                        borderRadius: '8px', 
                        marginTop: '10px'
                    }}
                >
                    <div className='flex justify-between w-full'>
                        <Text className={`text-greenCostom`}>
                            <PlayArrowIcon/>
                            معرفی دوره جرئت فیلم سازی
                        </Text>
                        <div className='flex gap-16 ml-2'>
                            <Text className={`text-greenCostom`}>پیش نمایش</Text>
                            <Text className={`text-greenCostom`}>5 دقیقه</Text>
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>


            <Accordion 
                sx={{
                    backgroundColor: '#303545',
                    marginTop: '8px'
                }}
            >
                <AccordionSummary 
                    sx={{
                        backgroundColor: '#353a4b', 
                        borderRadius: '8px', 
                        padding: '16px'
                    }}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    // expandIcon={<ExpandMoreIcon />}
                >
                    <div className='flex justify-between w-full'>
                        <Text>Custom transition using Fade</Text>
                        <div className='flex gap-20 ml-2'>
                            <Text>فصل ۱</Text>
                            <Text>5 دقیقه</Text>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails 
                    sx={{
                        backgroundColor: '#353a4b', 
                        borderRadius: '8px', 
                        marginTop: '10px'
                    }}
                >
                    <div className='flex justify-between w-full'>
                        <Text className={`text-greenCostom`}>
                            <PlayArrowIcon/>
                            معرفی دوره جرئت فیلم سازی
                        </Text>
                        <div className='flex gap-16 ml-2'>
                            <Text className={`text-greenCostom`}>پیش نمایش</Text>
                            <Text className={`text-greenCostom`}>5 دقیقه</Text>
                        </div>
                    </div>
                </AccordionDetails>
                
            </Accordion>   
        </div>
    )
}

export default ListCourses
