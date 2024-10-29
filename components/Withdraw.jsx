"use client";
import React, { useState } from 'react';
import GetOTPForm from './GetOTPForm';
import SubmitOTPForm from './SubmitOTPForm';


export default function Withdraw() {
  const [otpId, setOtpId] = useState(null);
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');

  const handleOtpFetched = (id) => {
    setOtpId(id);
  }; 

  return (
    <div className='flex md:flex-row flex-col gap-5'>
      <GetOTPForm
        onOtpFetched={handleOtpFetched}
        setAmount={setAmount}
        setAddress={setAddress}
      />
      <SubmitOTPForm
        otpId={otpId}
        address={address}
        amount={amount}
      />
  </div>
  );
}
