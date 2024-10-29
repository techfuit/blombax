import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Inteligent() {
  return (
    <div className=' py-10'>
      <LayoutCard title="REALITY WITH" highlight=" INTELLIGENT SOLUTIONS">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
           <div className='relative '>
              <Image height={900} width={1200} src="/robothand.png" alt="Inteligent image" className='w-[800px] h-[400px] ' />
           </div>
           <div className='flex flex-col justify-center gap-2'>
            <h2 className='gradient-text text-lg font-semibold'>SMART, EFFICIENT, AND TAILORED AI SOLUTIONS FOR MAXIMIZING SUCCESS</h2>
            <h1 className='md:text-6xl text-5xl'>JOURNEY WITH</h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>DFM Trade</h1>
            <p className='text-lg'>The cutting-edge artificial intelligence tool designed to elevate your experience in the world of cryptocurrency and crowdfunding. Our trade solutions are tailored to empower you with insights, strategies, and personalized recommendations, ensuring you make the most informed decisions on your financial journey. </p>
           </div>
        </div>
      </LayoutCard>
    </div>
  )
}
