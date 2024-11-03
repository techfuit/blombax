import Image from 'next/image'
import React from 'react'
import Right from "@/public/righticon.webp"
import Left from "@/public/leftsideicon.png"


export default function LowerFooter() {
    return (
        <div className='pt-24 pb-10 flex items-center justify-between max-md:justify-center'>
            <Image src={Right}  alt="3D Icon" className='lg:size-60 md:size-44 max-md:hidden' />
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex flex-col text-center gap-1
                '>
                 <h2 className='lg:text-5xl text-4xl mb-4'>Contact Us</h2>
                 <p>Support@bloombax.com</p>
                 
                </div>
                <p className='text-sm'>&copy; 2024 Bloombax. All Rights Reserved.</p>
            </div>

            <Image src={Left} alt="3D Icon" className='lg:size-60 md:size-44 max-md:hidden' />

        </div>
    )
}
