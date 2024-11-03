import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'

export default function About() {
  return (
    <div className=" pt-20" id='about' >
      <LayoutCard >
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
           <div className='relative '>
        
           <Image height={500} width={500} src="/aboutRobot.png" alt="About image" className='w-[480px]' />
           </div>
           <div className='flex flex-col justify-center gap-2'>
            <h2 className='gradient-text text-lg font-semibold'>AI-Powered Financial Analysis</h2>
            <h1 className='md:text-6xl text-5xl'>Use Data Insights to Elevate Your</h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>Investment Strategy</h1>
            <p className='text-lg'>*BloomBax (BMX)* is a revolutionary token built on the *BNB Smart Chain* designed to be a cornerstone of growth, wealth, and innovation. With BloomBax, you're not just investing in a token—you’re investing in a vision. Our goal is to make BMX the most profitable and valuable token in the world by delivering unmatched utility, strong partnerships, and long-term stability.</p>
           </div> 
        </div>
      </LayoutCard>
    </div>
  )
} 
