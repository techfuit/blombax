import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'
import Tokenomics from "@/public/tokonomics.png"


export default function Crowdfunding() {
  return (
    <div className=' py-10' id='crowdfunding' >
      <LayoutCard title="Tokenomics">
          <div>
            <Image src={Tokenomics} alt='crowdfunding' className='object-cover w-full h-full' />
          </div>
      </LayoutCard>
    </div>
  )
}
