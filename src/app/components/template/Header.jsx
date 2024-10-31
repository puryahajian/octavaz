"use client"

import React, { useEffect, useState } from 'react';
import ButtonGeneral from '../atoms/button-general';
import MenuHeader from '../organisms/menu-header';
import LogoHeader from '../atoms/logo-header';
import "../../globals.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OffCanvasExample from "../organisms/offcanvas";

function Header() {
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

    return (
        <div className={`header w-full items-center sticky top-0 z-10 flex justify-center py-2 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='max-w-[1160px] lg:w-full lg:w-[100%] flex justify-between items-center w-full px-3'>
                <div className='flex items-center'>
                    <LogoHeader />
                    <OffCanvasExample name="Menu" placement="end" />
                </div>
                <MenuHeader />
                <div className='flex gap-3 items-center'>
                    <ShoppingCartOutlinedIcon sx={{ color: 'white' }} />
                    <ButtonGeneral>
                        ثبت نام/ورود
                    </ButtonGeneral>
                </div>
            </div>
        </div>
    );
}

export default Header;
