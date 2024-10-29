import Link from 'next/link'
import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#00000017] glassBlur rounded-2xl my-10 py-10 flex flex-col items-center justify-center gap-5 shadow-shadow-bg'>
        <h2 className='md:text-5xl text-4xl gradient-text'>Join Us</h2>
        <p className='font-medium mb-8'>Transform Dreams into Reality Together </p>

        <div className='flex max-md:flex-col gap-2 max-md:gap-2 md:w-[50%] w-full px-3'>
            <div className='rounded-2xl bg-[#ffffff09] px-4 py-2 outline-none placeholder:text-lg  w-full '> https://t.me/dfmtradeofficial </div>
             <Link href="https://t.me/dfmtradeofficial" className='bg-base-color hover:bg-base-hover-color px-5 py-2 rounded-2xl text-xl font-medium text-center'>Subscribe</Link>
        </div>
    </div>
  )
}
