"use client";
import { fetchVerifyWithdrawOtp } from '@/app/actions/fetchverifyWithdrawOtp';
import { fetchWithdraw } from '@/app/actions/fetchWithdraw';
import { fetchCheckTransactionStatus } from '@/app/actions/fetchCheckTransactionStatus';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

export default function SubmitOTPForm({ otpId, address, amount }) {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false)

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  let otpExpired = false;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (otpExpired) {
      toast.error('OTP has expired. Please request a new OTP.');
      return;
    }

    if (!otpId || !otp) {
      toast.error('OTP ID and OTP are required');
      return;
    }
 
    try {
      const verificationResponse = await fetchVerifyWithdrawOtp({ otpId, otp });
      if (verificationResponse.status === true) {
        toast.success('OTP verified successfully');
        startWithdrawal({ address, amount })
        return
      } else if (verificationResponse.status === false) {
        toast.error('Failed to verify OTP');
        setLoading(false)
      }
    } catch (err) {
      toast.error('Failed to verify OTP');
      setLoading(false)
    }
  };

  const startWithdrawal = async ({ address, amount }) => {
    try {
      const { status, transaction_hash } = await fetchWithdraw({ address, amount })
      if (status === true) {
        const response = await pollTransactionStatus(transaction_hash);
        if (response.status === true) {
          toast.success('Transaction successful');
          setLoading(false)
          return
        } else if (status === false) {
          toast.error('Transaction failed.', error);
        }
      } else if (status === false) {
        toast.error("Withdral failed")
        setLoading(false)
      }
    } catch (err) {
      toast.error('Failed to perform withdrawal');
      setLoading(false)
      return;
    }
  };

  const pollTransactionStatus = async (transactionHash) => {
    try {
      const initialResponse = await fetchCheckTransactionStatus({ trx: transactionHash });

      if (initialResponse.status === true) {
        toast.success('Transaction successful');
        setLoading(false)
        return
      }else if(initialResponse.status === false){
         if (initialResponse.reason === "Failed"){
          toast.error('Transaction failed.', error)
          setLoading(false)
          return null;
         } else {
          toast.loading("Wait for some time", { duration: 3000 })
         } 
      }

      await new Promise(resolve => setTimeout(resolve, 5000));
      
      const secondResponse = await fetchCheckTransactionStatus({ trx: transactionHash });
     if(secondResponse.status === true) {
      toast.success('Transaction successful');
      setLoading(false)
      window.location.reload("/dashboard/withdrawHistory")
      return secondResponse.status === true ;
     } else{
      toast.error('Transaction failed.', error)
      setLoading(false)
      return null;
     }
    } catch (error) {
      toast.error('Failed to check transaction status');
      setLoading(false)
      return false;
    }
  };

  return (
    <form onSubmit={handleSubmit} className='md:w-1/2 w-full flex flex-col gap-5 p-5 border border-gray-500 rounded-2xl md:mt-0 mt-5'>
      <h2 className='lg:text-4xl text-3xl lg:font-bold font-semibold gradient-text2 text-center'>Submit Your OTP</h2>
      <div className='flex flex-col gap-1'>
        <label htmlFor="otp">OTP</label>
        <input
          type="number"
          id='otp'
          name='otp'
          value={otp}
          onChange={handleOtpChange}
          className='px-3 py-2.5 rounded-md bg-transparent outline-none ring-1 w-full'
        />
      </div>
      <button
          type="submit" aria-disabled={loading} disabled={loading}
          className='flex items-center justify-center px-4 py-2.5 bg-button-color rounded-md hover:bg-button-hover-color hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {loading ? (
            <>
              <svg viewBox="0 0 16 16" fill="currentColor"
                className="size-6 mr-2 text-white animate-spin">
                <path fill="currentColor"
                  d="M8 4.736a.933.933 0 01-.933-.933V1.005a.933.933 0 011.866 0v2.798A.933.933 0 018 4.736zM8 15.577a.583.583 0 01-.583-.583v-2.798a.583.583 0 111.166 0v2.798a.583.583 0 01-.583.583zM5.902 5.24a.875.875 0 01-.758-.437L3.745 2.38a.874.874 0 011.514-.874l1.399 2.423a.874.874 0 01-.756 1.311zM11.498 14.582a.525.525 0 01-.455-.262l-1.399-2.423a.525.525 0 11.909-.525l1.399 2.423a.525.525 0 01-.454.787zM4.365 6.718a.813.813 0 01-.407-.109L1.535 5.21a.817.817 0 01.816-1.414l2.423 1.399a.817.817 0 01-.408 1.523zM14.057 11.964a.461.461 0 01-.233-.063l-2.423-1.399a.467.467 0 01.466-.808l2.423 1.399a.467.467 0 01-.233.87zM3.803 8.758H1.005a.758.758 0 010-1.516h2.798a.758.758 0 110 1.516zM14.995 8.466h-2.798a.466.466 0 110-.932h2.798a.466.466 0 110 .932zM1.943 12.197a.698.698 0 01-.35-1.305l2.423-1.399a.698.698 0 11.699 1.211l-2.423 1.399a.69.69 0 01-.349.094zM11.635 6.368a.466.466 0 01-.233-.87l2.423-1.399a.466.466 0 11.466.808l-2.423 1.399a.469.469 0 01-.233.063zM4.502 14.699a.64.64 0 01-.555-.962l1.399-2.423a.641.641 0 111.111.641l-1.399 2.423a.64.64 0 01-.556.321zM10.098 4.832a.467.467 0 01-.404-.7l1.399-2.423a.467.467 0 01.808.466l-1.399 2.423a.464.464 0 01-.404.233z"
                />
              </svg>
              Submitting...
            </>) : ("Withdraw Now")
            }
        </button>
    </form>
  );
}
