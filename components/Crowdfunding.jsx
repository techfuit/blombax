import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Crowdfunding() {
  return (
    <div className=' py-10' id='crowdfunding' >
      <LayoutCard>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className=''>
            <h2 className='gradient-text text-lg font-semibold'>Empowering Holders</h2>
            <h1 className='md:text-6xl text-5xl'>We believe in </h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>Rewarding our community.</h1>
            <p className='text-lg'>Staking BMX tokens is at the heart of our ecosystem. Holders who stake BMX will earn attractive rewards, creating a stable and passive income stream. The longer you hold, the greater your rewards—so remember, with BloomBax, Hold is Gold! </p>
          </div>
          <div>
            <Image src='/brain.png' alt='crowdfunding' height={500} width={500} className='object-cover w-full h-full' />
          </div>
        </div>
      </LayoutCard>
    </div>
  )
}
