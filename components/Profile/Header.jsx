"use client"

import { useAuth } from '@/hook/useAuth';
import React from 'react'
import toast from 'react-hot-toast';

// `https://dfmtrade.com/register?referral_by=jhondoe&side=Left`
// `https://dfmtrade.com/register?referral_by=jhondoe&side=Right`
//  `http://localhost:3000/register?referral_by=jhondoe&side=Left`
//  `http://localhost:3000/register?referral_by=jhondoe&side=right`

export default function Header() {
    const { user } = useAuth()
   
    const referralIdLeft = `https://dfmtrade.com/register?referral_by=${user?.username}&side=left`
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
    const referralIdRight = `https://dfmtrade.com/register?referral_by=${user?.username}&side=right`

    const handleCopyRight = () => {
        navigator.clipboard.writeText(referralIdRight)
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
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2 items-center justify-center'>
                        <div className='flex-row-reverse md:flex-row flex gap-1 w-full h-16 '>
                            <button className='font-medium rounded-2xl px-5 py-2.5 shadow-shadow-bg hover:scale-105 bg-button-color hover:bg-button-hover-color flex gap-1 items-center justify-center ' onClick={handleCopyLeft}>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className='size-7'
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
                                Left
                            </button>
                            <div className='px-3 py-2.5 shadow-shadow-bg rounded-2xl  w-full overflow-hidden cursor-pointer ' onClick={handleCopyLeft}>
                                {referralIdLeft}
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-center justify-center mt-3 md:mt-0 '>
                        <div className='flex gap-1 w-full h-16'>
                            <div className='px-3 py-2.5 shadow-shadow-bg rounded-2xl  w-full overflow-hidden cursor-pointer' onClick={handleCopyRight}>
                                {referralIdRight}
                            </div>
                            <button className='font-medium rounded-2xl px-5 py-2.5 shadow-shadow-bg hover:scale-105 bg-button-color hover:bg-button-hover-color flex gap-1 items-center justify-center' onClick={handleCopyRight}>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="currentColor"
                                    className='size-7'
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
                                Right
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
