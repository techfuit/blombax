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
