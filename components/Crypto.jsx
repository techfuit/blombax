import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Crypto() {
  return (
    <div className=' py-10' id="crypto">
      <LayoutCard >
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
           <div className='relative '>
              <Image height={500} width={500} src="/crptyo.png" alt="Cripto image" className='w-[480px]' />
           </div>
           <div className='flex flex-col justify-center gap-2'>
            <h2 className='gradient-text text-lg font-semibold'>Empower Your Finances with the Power of Cryptocurrency</h2>
            <h1 className='md:text-6xl text-5xl'>Financial Empowerment  </h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>through Cryptocurrency</h1>
            <p className='text-lg'>BloomBax transcends industry boundaries, driving transactions, DeFi innovations, and e-commerce solutions while delivering exceptional value. Stake your BMX to earn consistent, lucrative rewards, because with BMX, holding truly pays off. Backed by top players across various sectors, BloomBax ensures BMX's long-term success, allowing you to invest with confidence alongside those who believe in its potential.</p>
           </div>
        </div>
      </LayoutCard>
    </div>
  )
}
