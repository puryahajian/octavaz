"use client"

import React, { useEffect, useState } from 'react'
import ButtonGeneral from '../atoms/button-general';
import MenuHeader from './menu-header';
import LogoHeader from '../atoms/logo-header';
import "../../globals.css";
import OffCanvasExample from "./offcanvas";
import ButtonBadge from './button-badge';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Text from '../atoms/text'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import OffcanvasProfileHeader from './offcanvas-profile-header'
// import MoleculesButtonBadge from './molecules-button-badge'
import MoleculesButtonBadgeShop from './molecules-button-badge';
import Link from 'next/link';

function MoleculesHeader() {
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > prevScrollY && isVisible) {setIsVisible(false);}
        if (currentScrollY < prevScrollY && !isVisible) {setIsVisible(true);}
        setPrevScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY, isVisible]);

    const styleMenuItem = {
        display: 'flex',
        gap: '8px',
        paddingLeft: '0px',
        paddingTop: '8px',
        paddingBottom: '8px',
        cursor: 'pointer',
    }
    const styleItemIcon = {
        fontSize: '22px', 
        color: '#9ca3af'
    }
    const styleItemExit = {
        fontSize: '22px', 
        color: '#dc2626'
    }
    const styleLink = {
        display: 'flex',
        gap: '8px',
        paddingLeft: '120px',

    }
    return (
        <div className={`header w-full items-center sticky top-0 z-10 flex justify-center py-2 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='max-w-[1160px] lg:w-full lg:w-[100%] flex justify-between items-center w-full px-3'>
                <div className='flex items-center'>
                    <LogoHeader />
                    <OffCanvasExample name="Menu" placement="end" />
                </div>
                <MenuHeader />
                <div className='flex gap-3 items-center hidden'>
                    <ButtonGeneral>
                        ثبت نام/ورود
                    </ButtonGeneral>
                </div>
                <div className='flex gap-3 items-center max-[1020px]:hidden'>
                    <NotificationsOutlinedIcon sx={{color: 'white', cursor:'pointer', transition:'0.2s',
                        ":hover":{
                            color: '#65a8d2'
                        }
                    }}/>
                    <MoleculesButtonBadgeShop/>
                    {/* <BookmarkBorderOutlinedIcon sx={{color: 'white', cursor:'pointer', transition:'0.2s',
                        ":hover":{
                            color: '#65a8d2'
                        }
                    }}/> */}
                    <ButtonBadge
                        buttonContent={
                            <PersonOutlineOutlinedIcon sx={{fontSize: '32px'}}/>
                        }    
                    >
                        <div className='p-3'>
                            <Text className={`text-xs`}>
                                نام کاربری
                            </Text>
                            <Text className={`mt-2 text-xs`}>
                                ایمیل کاربر
                            </Text>
                            <hr className='text-gray-500 mt-2' />
                            <ul>
                                <li style={styleMenuItem} >
                                    <Link style={styleLink} href='dashboard'>
                                        <PersonOutlineOutlinedIcon style={styleItemIcon} />
                                        <Text className={`text-base`}>
                                            پنل هنرجو
                                        </Text>
                                    </Link>
                                </li>
                                <hr className='text-gray-500' />
                                <li style={styleMenuItem}>
                                    <Link style={styleLink} href=''>
                                        <ClassOutlinedIcon style={styleItemIcon}/>
                                        <Text className={`text-base`}>
                                            دوره ها
                                        </Text>
                                    </Link>
                                </li>
                                <hr className='text-gray-500' />
                                <li style={styleMenuItem}>
                                    <Link style={styleLink} href=''>
                                        <MailOutlineOutlinedIcon style={styleItemIcon}/>
                                        <Text className={`text-base`}>
                                            پیام ها
                                        </Text>
                                    </Link>
                                </li>
                                <hr className='text-gray-500' />
                                <li style={styleMenuItem}>
                                    <Link style={styleLink} href=''>
                                        <ExitToAppOutlinedIcon style={styleItemExit}/>
                                        <Text className={`text-red-600 text-base`}>
                                            خروج
                                        </Text>
                                    </Link>
                                </li>
                            </ul>  
                        </div>
                    </ButtonBadge>
                </div>
                <div className='max-[1020px]:block max-[2000px]:hidden'>
                    <OffcanvasProfileHeader/>
                </div>
            </div>
        </div>
    )
}

export default MoleculesHeader
