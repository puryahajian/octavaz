"use client"
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import ListMenuHeader from '../../lib/menu-header'


function MenuHeader() {
    const pathname = usePathname();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const menuIndex = ListMenuHeader.findIndex(item => item.link === pathname)
        if (menuIndex !== -1) setActiveIndex(menuIndex)
    },[pathname])

    return (
        <ul className='flex font-sans text-white m-0 hidden lg:flex'>
            {ListMenuHeader.map((item, index) => (
                <li 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className='w-max mr-5'
                >
                    <Link 
                        href={item.link}
                        className='no-underline'
                        >
                            <span className='text-white text-sm'>{item.label}</span>
                    </Link>
                </li>
                
            ))}
        </ul>
    )
}

export default MenuHeader
