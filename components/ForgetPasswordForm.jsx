"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from "@/public/Logo.png"

export default function ForgetPasswordForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className='p-10 max-sm:px-5 my-10'>
        <div className='flex flex-col items-center p-10 max-sm:px-5 md:w-[620px] mx-auto rounded-2xl gap-5'>
        <Image alt="Logo" src={Logo} className='h-24 object-cover rounded-md' />
          <p className='text-center text-lg font-medium'> If you have forgotten your password, enter your username and we will email you your password. </p>
          <form onSubmit="#" className='w-full'>
            <div>
              <label htmlFor="username" className='font-medium text-black'>Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder='Enter your usename here...'
                required
                className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-white rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className='font-medium text-black'>E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your e-mail here...'
                required
                className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-white rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                onChange={handleChange}
              />
            </div>
            <button type="submit" className='w-full py-2.5 bg-button-color hover:bg-button-hover-color font-medium text-lg rounded-md'>Send Password on E-mail</button>
            <div className='text-lg text-center mt-5'>
              Already have an account? <Link href="/login" className='text-form-color tracking-wide underline'>Login</Link>
            </div>
            <div className='text-lg text-center mt-2 tracking-wide'>
              {` Don't`} have an account? <Link href="/register" className='text-form-color  underline'>Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
