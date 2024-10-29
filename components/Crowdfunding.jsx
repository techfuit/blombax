import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Crowdfunding() {
  return (
    <div className=' py-10' id='crowdfunding' >
      <LayoutCard>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className=''>
            <h2 className='gradient-text text-lg font-semibold'>Personalized AI Investment Strategie</h2>
            <h1 className='md:text-6xl text-5xl'>Tailored Financial</h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'> Plans for Optimal Growth</h1>
            <p className='text-lg'>DFM creates customized investment plans tailored to your financial goals, risk tolerance, and market conditions. Continuously learning and adapting, our plans ensures your portfolio aligns with your objectives, providing personalized recommendations for optimal growth and success in the dynamic world of crypto and crowdfunding. </p>
          </div>
          <div>
            <Image src='/brain.png' alt='crowdfunding' height={500} width={500} className='object-cover w-full h-full' />
          </div>
        </div>
      </LayoutCard>
    </div>
  )
}
