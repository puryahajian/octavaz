"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import interceptor from '../lib/interceptor'

export function useLoginForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendOtpMutation = useMutation({
    mutationFn: async (data) => {
      const response = await interceptor.post('', data);
      return response.data;
    },
    onSuccess: () => {
      setStep(2);
    },
    onError: (error) => {
      console.error('Failed to send OTP:', error);
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: async (data) => {
      const response = await interceptor.post('', data);
      return response.data;
    },
    onSuccess: () => {
      alert('Login successful');
      reset();
      setStep(1);
    },
    onError: (error) => {
      console.error('Failed to verify OTP:', error);
    },
  });

  // هندلر مرحله اول - ارسال شماره تماس
  const onSubmitPhone = (data) => {
    setPhoneNumber(data.phoneNumber);
    sendOtpMutation.mutate({ phoneNumber: data.phoneNumber });
  };

  // هندلر مرحله دوم - تایید کد عبور
  const onSubmitOtp = (data) => {
    verifyOtpMutation.mutate({ phoneNumber, otp: data.otp });
  };

  return {
    register,
    handleSubmit,
    errors,
    step,
    onSubmitPhone,
    onSubmitOtp,
    sendOtpLoading: sendOtpMutation.isLoading,
    verifyOtpLoading: verifyOtpMutation.isLoading,
  };
}
