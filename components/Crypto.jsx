import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function Crypto() {
  return (
    <div className=' py-10' id="crypto">
      <LayoutCard title="Crypto" highlight="Unleashed">
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
           <div className='relative '>
              <Image height={500} width={500} src="/crptyo.png" alt="Cripto image" className='w-[480px]' />
           </div>
           <div className='flex flex-col justify-center gap-2'>
            <h2 className='gradient-text text-lg font-semibold'>Empower Your Finances with the Power of Cryptocurrency</h2>
            <h1 className='md:text-6xl text-5xl'>Financial Empowerment  </h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>through Cryptocurrency</h1>
            <p className='text-lg'>DFM creates customized investment plans tailored to your financial goals, risk tolerance, and market conditions. Continuously learning and adapting, our system ensures your portfolio aligns with your objectives, offering personalized recommendations for optimal growth and success in the dynamic world of crypto and crowdfunding. Check out our trading website, DFM, to experience the future of personalized investment.</p>
           </div>
        </div>
      </LayoutCard>
    </div>
  )
}
