"use client"
import useClickOutside from '@/hook/useClickOutside';
import { cn } from '@/lib/cn';
import React, { useState } from 'react'
import Logout from '../Logout/logout';
import { useGlobalContextProvider } from '@/hook/useContext';
import Image from 'next/image';

export default function Topbar() {
    const [isOpenDropDown, setOpenDropDown] = useState(false);
    const {isOpen, setOpen} = useGlobalContextProvider()

    const toggleSidebar = () => {
        setOpen(!isOpen)
    }

    const close = () => {
        setOpenDropDown(false)
    }
    const toggleOpen = () => {
        setOpenDropDown(!isOpenDropDown)
    }
    const ref = useClickOutside(
        () => {
            close();
        }
    )

    return (
        <div className='w-full p-5 flex items-center justify-between bg-glass-color glassBlur rounded-2xl sticky top-0 z-10 '>
             <div className="cursor-pointer flex gap-4 items-center " onClick={toggleSidebar}>
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className='size-10'
                >
                    <path d="M21 13H3a1 1 0 010-2h18a1 1 0 010 2zm0 5H3a1 1 0 010-2h18a1 1 0 010 2zm0-10H3a1 1 0 010-2h18a1 1 0 010 2z" />
                </svg>
            </div>
            <div>
                    <Image src="/DFM Logo Dark Mode.png" alt="Logo" height={500} width={800} priority className={cn('h-12 object-contain w-40')} />
                </div>
            <div className='flex gap-2 items-center relative cursor-pointer' ref={ref} onClick={toggleOpen}>
              <Logout className="rounded-full" />
            </div>
        </div>
    )
}
