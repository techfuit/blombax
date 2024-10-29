import React from 'react'
import LayoutCard from './LayoutCard'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='py-10 pt-20' id='home' >
      <LayoutCard>
        <div className='md:w-1/2 w-full text-center flex flex-col gap-5'>
          <h2 className='lg:text-7xl md:text-6xl text-5xl font-semibold'>Empower Your Finances with the Power of Cryptocurrency!</h2>
          {/* <Link href="/login" className='bg-button-color hover:bg-button-hover-color px-5 py-2.5 rounded-full text-xl font-medium flex gap-1 items-center w-40 mx-auto'>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className='size-6 text-white'
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M14 14.252V22H4a8 8 0 0110-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm6 4v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" />
            </svg> Join Now
          </Link> */}
        </div>
        <div className='mx-auto'>
        <Image src="/about ai.png" height={500} width={500} alt="Home Image" className='w-96 h-auto rounded-md' />
      
        </div> 
      </LayoutCard>
    </div>
  )
}
