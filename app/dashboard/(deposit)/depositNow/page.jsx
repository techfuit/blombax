"use client"
import React, { useEffect, useRef } from 'react'
import toast from 'react-hot-toast';
import QRCode from 'qrcode';
import { useAuth } from '@/hook/useAuth';

export default function DepositNowPage() { 

  const {user, loading} = useAuth()

  const depositId = user?.wallet_address

  const handleCopy = () => {
      navigator.clipboard.writeText(depositId)
          .then(() => {
              toast.success("Deposit Address copied successfully", {
                  duration: 2000
              })
          })
          .catch(err => {
              toast.error('Failed to copy Deposit Address');
          });
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, depositId, { width: 180 }, (error) => {
        if (error) console.error(error);
      });
    }
  }, [depositId]);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl my-5 p-5 '>
      <h2 className='md:text-5xl text-4xl gradient-text2 font-semibold md:font-bold text-center pb-5'>Deposit</h2>
      <div className='flex md:flex-row flex-col items-center justify-center gap-5 '>
        <div className="border border-gray-500 p-5 md:w-1/2 w-full h-72 flex flex-col  justify-center gap-5 bg-base-glass-color rounded-2xl ">
          <div className='flex items-center justify-between border rounded-md p-5'>
            <p className='font-medium'>Minimum Deposit</p>
            <p className='font-medium text-blue-600'>$20</p>
          </div>
          <div className=' w-full'>
            <h3 className='text-xl font-semibold'>Deposit Address</h3>
            <div className='border px-5 py-2.5 font-medium flex gap-5 rounded-md mt-1 ' onClick={handleCopy}>
              <p className='w-full overflow-hidden'>{depositId}</p>
              <button className='text-blue-600'>
                <svg fill="none" viewBox="0 0 15 15" className='size-6'>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1 9.5A1.5 1.5 0 002.5 11H4v-1H2.5a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5h7a.5.5 0 01.5.5V4H5.5A1.5 1.5 0 004 5.5v7A1.5 1.5 0 005.5 14h7a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0012.5 4H11V2.5A1.5 1.5 0 009.5 1h-7A1.5 1.5 0 001 2.5v7zm4-4a.5.5 0 01.5-.5h7a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div> 
          </div>
        </div>
        <div className='border border-gray-500 md:w-1/2 w-full flex flex-col gap-5 items-center justify-center h-72 bg-base-glass-color rounded-2xl'>
        { loading ? (<div>Loading</div> ) : ( <canvas ref={canvasRef} />)}
          <h2 className='text-2xl font-semibold gradient-text2'>USDT (BEP-20)</h2>
        </div>
      </div>
    </div>
  )
}
