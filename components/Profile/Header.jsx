"use client"

import { useAuth } from '@/hook/useAuth';
import React from 'react'
import toast from 'react-hot-toast';

export default function Header() {
    const { user } = useAuth()
   
    const referralIdLeft = `https://dfmtrade.com/register?referral_by=${user?.username}`
    const handleCopyLeft = () => {
        navigator.clipboard.writeText(referralIdLeft)
            .then(() => {
                toast.success("Referral Id copied successfully", {
                    duration: 2000
                })
            })
            .catch(err => {
                toast.error('Failed to copy referral ID');
            });
    };

    return (
        <div className='w-full my-5 p-3 bg-glass-color glassBlur rounded-2xl flex max-md:flex-col gap-5'>
            <div className=' w-full p-5 shadow-shadow-bg rounded-2xl'>
                <h2 className='text-center text-4xl font-semibold gradient-text2 pb-5'>Referral Links</h2>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='flex-row-reverse md:flex-row flex gap-3 w-full '>          
                            <div className='px-3 py-2.5 shadow-shadow-bg flex items-center justify-center rounded-2xl  w-full overflow-hidden cursor-pointer ' onClick={handleCopyLeft}>
                                {referralIdLeft}
                            </div>
                            <button className='font-medium rounded-2xl px-4 py-2.5 shadow-shadow-bg hover:scale-105 bg-button-color hover:bg-button-hover-color flex gap-1 items-center justify-center ' onClick={handleCopyLeft}>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className='w-7 h-6'
                                >
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M185 128 H407 A57 57 0 0 1 464 185 V407 A57 57 0 0 1 407 464 H185 A57 57 0 0 1 128 407 V185 A57 57 0 0 1 185 128 z"
                                    />
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={32}
                                        d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
                                    />
                                </svg>
                                Copy
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}
