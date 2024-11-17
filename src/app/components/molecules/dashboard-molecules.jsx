"use client"

import React, { useState } from 'react'
import Header from '../template/Header'
import '../../globals.css'
import PanelDashboard from '../molecules/panel-dashboard';
import UserAccountDashboard from '../molecules/user-account-dashboard';
import PayCoursesDashboard from '../molecules/pay-courses-dashboard';
import FinancialReportDashboard from './financial-report-dashboard';
import Footer from '../template/footer'
import MenuDashboard from '../../lib/menu-dashboard'

function TabPanel({ children, value, index }) {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ padding: '16px', backgroundColor: '#353a4b', color: '#fff', borderRadius: '8px' }}
        >
            {value === index && <div>{children}</div>}
        </div>
    );
}
  
function DashboardMolecules() {
    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Header/>
            <div className={`!max-w-[1300px] m-auto`}>
                <div className='mt-9 flex gap-2 max-[990px]:block'>
                    <div className='bg-colorBgItemProductPage flex flex-col w-64 text-white py-4 rounded-lg max-[990px]:w-full' 
                        >
                        {MenuDashboard.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => handleChange(index)}
                                className={`px-2 flex items-center gap-2 py-3 cursor-pointer text-right w-full ${value === index ? 'bg-bgActiveMenuDashboard text-Custom' : 'bg-bgMenuDashboard text-gray-500'}`}
                                aria-controls={`vertical-tabpanel-${index}`}
                            >
                                <span>{tab.icon}</span>
                                <span className='font-sans text-sm'>{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className='ml-4 max-[990px]:ml-0 max-[990px]:mt-4 grow'>
                        <TabPanel value={value} index={0}>
                            <PanelDashboard/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <UserAccountDashboard/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <PayCoursesDashboard/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <FinancialReportDashboard/>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <p>محتوای پیام‌ها</p>
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            <p>محتوای پیام‌ها</p>
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            <p>محتوای پیام‌ها</p>
                        </TabPanel>
                        <TabPanel value={value} index={7}>
                            <p>محتوای پیام‌ها</p>
                        </TabPanel>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default DashboardMolecules
