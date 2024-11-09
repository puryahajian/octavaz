"use client"

import React from 'react'
import Text from '../components/atoms/text'
import Title from '../components/atoms/title'
import ButtonGeneral from '../components/atoms/button-general';
import { useLoginForm } from '@/app/db/data-login-register';

function LoginMulecules() {
    const {
        register,
        handleSubmit,
        errors,
        step,
        onSubmitPhone,
        onSubmitOtp,
        sendOtpLoading,
        verifyOtpLoading,
    } = useLoginForm();

    return (
        <div className=' fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center'>
            <div className=' w-80 '>
                <div className='justify-center grid'>
                    <img src='../images/logo.png' width={100} className='rounded-full'/>
                </div>

                <div>
                    <Title className={`text-lg mb-4 mt-9`}>ورود / ثبت نام</Title>

                    {step === 1 && (
                        <form onSubmit={handleSubmit(onSubmitPhone)}>
                            <div>
                                <Text  htmlFor="phoneNumber"> ایمیل یا شماره تماس: </Text>
                                <input
                                    type="text"
                                    id="phoneNumber"
                                    className='w-full bg-[#a4a4a4] h-9 mt-4 rounded-md'
                                    {...register('phoneNumber', { required: 'Phone number is required' })}
                                />
                                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                            </div>
                            <ButtonGeneral className={`w-full mt-8`} type="submit" disabled={sendOtpLoading}>
                                {sendOtpLoading ? 'درحال ارسال' : 'ورود'}
                            </ButtonGeneral>
                        </form>
                    )}

                    {step === 2 && (
                        <form onSubmit={handleSubmit(onSubmitOtp)}>
                        <div>
                            <Text htmlFor="otp"> کد تایید را وارد کنید :</Text>
                            <input
                                type="text"
                                id="otp"
                                className='w-full bg-[#a4a4a4] h-9 mt-4 rounded-md'
                                {...register('otp', { required: 'OTP is required' })}
                            />
                            {errors.otp && <p>{errors.otp.message}</p>}
                        </div>
                        <ButtonGeneral className={`w-full mt-8`} type="submit" disabled={verifyOtpLoading}>
                            {verifyOtpLoading ? 'در حال بررسی' : 'ارسال'}
                        </ButtonGeneral>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LoginMulecules