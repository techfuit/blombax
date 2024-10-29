import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Financial() {
  return (
    <div className=' py-10'>
        <LayoutCard>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className=''>
            <h2 className='gradient-text text-lg font-semibold'>INTELLIGENT, PERSONALIZED SOLUTIONS FOR MAXIMIZING PROFITS</h2>
            <h1 className='md:text-6xl max-sm:break-words text-5xl'>REVOLUTIONIZING </h1>
            <h1 className='gradient-text md:text-6xl max-sm:text-3xl text-5xl mb-8'> FINANCIAL SUCCESS</h1>
            <p className='text-lg'>Our cutting-edge companions designed to enhance your experience in cryptocurrency and crowdfunding. Our AI solutions and personal assistant bot provide insights, strategies, and instant assistance to ensure you make informed decisions and achieve financial success. </p>
          </div>
          <div>
            <Image src='/aiWithBrain.png' alt='crowdfunding' height={500} width={500} className='object-cover w-full h-full' />
          </div>
        </div>
      </LayoutCard>
    </div>
  )
}
