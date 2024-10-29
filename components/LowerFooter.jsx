import Image from 'next/image'
import React from 'react'


export default function LowerFooter() {
    return (
        <div className='pt-24 pb-10 flex items-center justify-between max-md:justify-center'>
            <Image src="/3DIcon1.png" alt="3D Icon" height={600} width={600} className='lg:size-60 md:size-44 max-md:hidden' />
            <div className='flex flex-col gap-3 items-center'>
                <div className='flex flex-col text-center gap-1
                '>
                 <h2 className='lg:text-5xl text-4xl mb-4'>Contact Us</h2>
                 <p>Admin@dfmtrade.com</p>
                 <p>Support@dfmtrade.com</p>
                 
                </div>
                <p className='text-sm'>&copy; 2024 DFM Trade. All Rights Reserved.</p>
            </div>

            <Image src="/3DIcon2.png" alt="3D Icon" height={600} width={600} className='lg:size-60 md:size-44 max-md:hidden' />

        </div>
    )
}
