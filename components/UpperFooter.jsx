import Image from 'next/image'
import React from 'react'

export default function UpperFooter() {
  return (
    <div className=' pt-20 text-center '>
        <div className='h-40 mb-7 flex items-center justify-center mx-auto'>
        <Image src="/DFM Logo Dark Mode.png" height={500} width={500} alt="DFM logo" />
      </div>
      <h1 className='md:text-5xl text-4xl font-bold mb-4'>Join the Design For </h1>
      <h1 className='md:text-5xl text-4xl gradient-text font-bold mb-10'>
      Marketing Community
      </h1>
      <p className='text-lg opacity-80 font-medium tracking-wider'> { `" Where dreams flourish, connections thrive, and possibilities are limitless."` } </p>
    </div>
  )
}
