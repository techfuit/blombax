import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function About() {
  return (
    <div className=" pt-20" id='about' >
      <LayoutCard title="ABOUT" highlight="THE PLATFORM">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
           <div className='relative '>
        
           <Image height={500} width={500} src="/aboutRobot.png" alt="About image" className='w-[480px]' />
           </div>
           <div className='flex flex-col justify-center gap-2'>
            <h2 className='gradient-text text-lg font-semibold'>AI-Driven Financial Insights</h2>
            <h1 className='md:text-6xl text-5xl'>Unlock the Power of Data for Smarter </h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>Investment Decisions</h1>
            <p className='text-lg'>DFM provides real-time financial insights by analyzing market trends, historical data, and economic indicators. Tailored to your investment goals, our recommendations plans help both new and experienced cryptocurrency investors make informed decisions, minimize risks, and maximize returns. </p>
           </div>
        </div>
      </LayoutCard>
    </div>
  )
} 
