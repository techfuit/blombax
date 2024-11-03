import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Financial() {
  const title = "Smart, Customized Strategies for Profit Optimization"
  const subtitle = "Transforming"
  return (
    <div className=' py-10'>
        <LayoutCard>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className=''>
            <h2 className='gradient-text text-lg font-semibold'>{title.toUpperCase()}</h2>
            <h1 className='md:text-6xl max-sm:break-words text-5xl'>{subtitle.toUpperCase()} </h1>
            <h1 className='gradient-text md:text-6xl max-sm:text-3xl text-5xl mb-8'> FINANCIAL SUCCESS</h1>
            <p className='text-lg'>Our cutting-edge tools elevate your experience in cryptocurrency and crowdfunding. With AI-driven insights, strategic guidance, and an instant-assistance bot, we empower you to make informed decisions and reach your financial goals. </p>
          </div>
          <div>
            <Image src='/aiWithBrain.png' alt='crowdfunding' height={500} width={500} className='object-cover w-full h-full' />
          </div>
        </div>
      </LayoutCard>
    </div>
  )
}
