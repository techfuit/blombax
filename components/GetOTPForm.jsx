"use client";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { fetchWithdrawOTP } from '@/app/actions/fetchWithdrwOTP';

export default function GetOTPForm({ onOtpFetched, setAmount, setAddress }) {
  const [localAmount, setLocalAmount] = useState('');
  const [localAddress, setLocalAddress] = useState('');

  const handleAmountChange = (e) => {
    setLocalAmount(e.target.value);
    setAmount(e.target.value); // Pass the value up to the Withdraw component
  };

  const handleAddressChange = (e) => {
    setLocalAddress(e.target.value);
    setAddress(e.target.value); // Pass the value up to the Withdraw component
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (localAmount < 10) {
      toast.error('Amount must be greater or equal than 10');
      return;
    }

    try {
      const otpResponse = await fetchWithdrawOTP();
      if (otpResponse.status === true) {
        onOtpFetched(otpResponse.otpId);
        toast.success('OTP fetched successfully');
      } else if (otpResponse.status === false) {
        toast.error('Failed to fetch OTP');
      }
    } catch (err) {
      toast.error('Failed to fetch OTP');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='md:w-1/2 w-full flex flex-col gap-5 p-5 border border-gray-500 rounded-2xl'>
      <div className='flex flex-col gap-1'>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id='amount'
          name='amount'
          value={localAmount}
          placeholder='Minimum $10'
          onChange={handleAmountChange}
          className='px-3 py-2.5 rounded-md bg-transparent outline-none ring-1 w-full'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor="address">Withdraw Address</label>
        <input
          type="text"
          id='address'
          name='address'
          placeholder='USDT (BEP-20)'
          value={localAddress}
          onChange={handleAddressChange}
          className='px-3 py-2.5 rounded-md bg-transparent outline-none ring-1 w-full'
        />
      </div>
      <button type="submit" className='px-5 py-2.5 bg-button-color hover:bg-button-hover-color transition-all duration-200 ease-in-out rounded-md'>
        Get OTP
      </button>
    </form>
  );
}
