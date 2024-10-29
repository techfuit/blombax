import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Funding() {
  return (
    <div className=" py-10">
        <LayoutCard title="Opulence from" highlight="Funding">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
           <div className='flex flex-col justify-center gap-2'>
            <h2 className='gradient-text text-lg font-semibold'>Elevating Your Lifestyle with Innovation</h2>
            <h1 className='md:text-6xl text-5xl'>Indulge in the  </h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>Finer Things</h1>
            <p className='text-lg'>Step into a world where luxury becomes a reality with crypto and crowdfunding. Reimagine opulent living, from lavish villas to exotic adventures, all within reach through strategic investments and community backing. With crypto’s growth potential and crowdfunding’s collective support, redefine traditional wealth boundaries and unlock unparalleled financial success.  </p>
           </div>
           <div className='relative '>
              <Image height={800} width={800} src="/cryptoworld.png" alt="About image" className='w-[440px] mx-auto' />
           </div>
        </div>
      </LayoutCard>
    </div>
  )
}
