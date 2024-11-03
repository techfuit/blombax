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
            <h2 className='gradient-text text-lg font-semibold'>SMART AND EFFICIENT SOLUTIONS FOR MAXIMIZING SUCCESS</h2>
            <h1 className='md:text-6xl text-5xl'>JOURNEY WITH</h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>Bloombax</h1>
            <p className='text-lg'>Don’t miss your chance to be part of a transformative journey. Whether you’re a new crypto enthusiast or a seasoned investor, BloomBax (BMX) is the future of profitable, real-world cryptocurrency. Stake, hold, and grow with us—together, we’ll make BloomBax a global powerhouse!
            </p>
           </div>
        </div>
      </LayoutCard>
    </div>
  )
}
