import Image from 'next/image'
import React from 'react'

export default function Partners() { 
  return (
    <div className='flex items-center justify-center flex-col gap-10 py-10'>
      <h2 className='text-4xl font-medium text-center'>Strategic Partners </h2>
      <div className='flex justify-center items-center'>
        <div className="flex max-sm:flex-col items-center justify-center gap-5 flex-wrap">
          <div className='border border-[#83838340] rounded-2xl box-border h-24 flex items-center justify-center bg-glass-color glassBlur3'>
          <Image alt='Partner Photo 2' width={400} height={400} src="/Binance_logo.png" className='w-52 p-3' />
          </div>
          <div className='border border-[#83838340] rounded-2xl box-border h-24 flex items-center justify-center bg-glass-color glassBlur3'>
            <Image alt='Partner Photo 2' width={400} height={400} src="/wallet-light-02.png" className='w-52 p-3' />
          </div>
          <div className='border border-[#83838340] rounded-2xl box-border h-24 flex items-center justify-center bg-glass-color glassBlur3'>
            <Image alt='Partner Photo 2' width={400} height={400} src="/wallet-light-03.png" className='w-52 p-3' />
          </div>
          <div className='border border-[#83838340] rounded-2xl box-border h-24 flex items-center justify-center bg-glass-color glassBlur3'>
            <Image alt='Partner Photo 2' width={400} height={400} src="/coinbase-logo.avif" className='w-52 p-3' />
          </div>
          <div className='border border-[#83838340] rounded-2xl box-border h-24 flex items-center justify-center bg-glass-color glassBlur3'>
          <Image alt='Partner Photo 2' width={400} height={400} src="/KUCOIN.png" className='w-52 p-5' />
          </div>
        </div>
      </div>
    </div>
  ) 
}
