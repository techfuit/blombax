"use client"

import { useAuth } from '@/hook/useAuth'
import React from 'react'
import ProfileUpdateForm from './ProfileUpdateForm';
import PasswordUpdateForm from './PasswordUpdateForm';

export default function Hero() {
    const { user } = useAuth()

    return (
        <div className='bg-glass-color glassBlur my-5 rounded-2xl shadow-shadow-bg'>
            <div className='rounded-ss-2xl rounded-se-2xl bg-[url("/profileBg.jpg")] bg-cover bg-center h-80 relative'>
            
                {/* <div className='absolute -bottom-16 left-5'>
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="md:w-28 w-16 bg-blue-500 rounded-full p-1 shadow-shadow-bg"
                    >
                        <path d="M256,508C117.04,508,4,394.96,4,256S117.04,4,256,4s252,113.04,252,252S394.96,508,256,508z" fill="#FFFFFF" />
                        <path d="M256,8c136.752,0,248,111.248,248,248S392.752,504,256,504S8,392.752,8,256S119.248,8,256,8 M256,0 C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0L256,0z" fill="#D6D6D6" />
                        <ellipse cx="256" cy="175.648" rx="61.712" ry="60.48" fill="#0BA4E0" />
                        <path d="M362.592,360.624c0-57.696-47.728-104.464-106.592-104.464s-106.592,46.768-106.592,104.464H362.592z" fill="#0BA4E0" />
                    </svg>
                </div> */}

            </div>
            <div className=' mx-3 mt-20 pb-10 '>
                <div className='bg-blue-500 p-3 rounded-ss-2xl rounded-se-2xl'>
                    <p className='text-2xl font-medium'>Profile Overview</p>
                </div>
                <div className='min-h-20 bg-base-glass-color flex items-center max-md:flex-col rounded-es-2xl rounded-ee-2xl'>
                    <div className='md:w-1/2 w-full p-5 md:pb-5 pb-1 '>
                        <h3 className='font-medium gradient-text2'>Username </h3>
                        <p className='text-2xl font-medium mb-2'> {user?.username || "username"} </p>
                        <h3 className='font-medium gradient-text2'>Full Name</h3>
                        <p className='text-2xl font-medium mb-2'> {user?.name || "Name"} </p>
                        <h3 className='font-medium gradient-text2'>Phone Number</h3>
                        <p className='text-2xl font-medium mb-2'>
                            {user?.phone_number || "No Number available"}
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full px-5 md:py-5 py-0'>

                        <h3 className='font-medium gradient-text2'>E-mail</h3>
                        <p className='text-2xl font-medium'>{user?.email || "email address"}</p>
                        <h3 className='font-medium gradient-text2'>Joining Date</h3>
                        <p className='text-2xl font-medium'>
                            {user?.created_at ? user.created_at.split(' ')[0] : "No date available"}</p>
                        <h3 className='font-medium gradient-text2'>Referral ID</h3>
                        <p className='text-2xl font-medium mb-2'>{user?.refered_by || "referral id"} </p>

                    </div>
                </div>

            </div>

            <div className='flex gap-1 max-md:flex-col'>
                <div className=' px-3 pt-5 pb-10 md:w-1/2 w-full '>
                    <div className='bg-blue-500 p-3 rounded-ss-2xl rounded-se-2xl '>
                        <p className='text-2xl font-medium'>Update Profile</p>
                    </div>
                    <div className='min-h-20 bg-base-glass-color rounded-es-2xl rounded-ee-2xl'>
                        <div className='w-full p-5'>
                            <ProfileUpdateForm />
                        </div>
                    </div>
                </div>
                <div className=' px-3 pt-5 pb-10 md:w-1/2 w-full '>
                    <div className='bg-blue-500 p-3 rounded-ss-2xl rounded-se-2xl '>
                        <p className='text-2xl font-medium'>Update Password</p>
                    </div>
                    <div className='min-h-20 bg-base-glass-color rounded-es-2xl rounded-ee-2xl'>
                        <div className='w-full p-5'>
                            <PasswordUpdateForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
