"use client"

import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseIcon from '@mui/icons-material/Close';
import Text from '../atoms/text';
import Link from 'next/link';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';

function OffcanvasProfileHeader({...props}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const menuOffcanvas = [
      {link: '/dashboard', label: 'پنل دانشجو'},
      {link: '/', label: 'دوره ها'},
      {link: '/', label: 'پیام ها'}
    ]
    

    return (
        <div>
            <Button onClick={handleShow} className="mx-4 bg-transparent border-none lg:hidden p-0">
                <PersonOutlineOutlinedIcon sx={{fontSize: '32px'}}/>
            </Button>
            <Offcanvas className='!w-full' show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header className='bg-bgmain block'  >
                    <CloseIcon sx={{color: 'white'}} onClick={handleClose}/>
                    <div className='block m-auto text-center'>
                        <PersonIcon className='text-9xl text-Custom'/>
                        <Text className={`text-xl !text-Custom`}>نام کاربری </Text>
                        <Text className={`text-xl mt-4`}>ایمیل یا شماره همراه</Text>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body className='bg-bgmain text-white'>
                <ul className='grid px-3'>
                    {menuOffcanvas.map((item, index) => (
                    <li 
                        key={index}
                        // onClick={() => setActiveIndex(index)}
                        className='w-full font-sans text-base border-y border-y-slate-700 py-3'
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
                <Text className={`text-red-600 border-y border-y-slate-700 py-3 px-3`}>خروج</Text>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default function Example() {
    return (
      <>
        {['start'].map((placement, idx) => (
          <OffcanvasProfileHeader key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }
  