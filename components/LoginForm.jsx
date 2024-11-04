import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Logo from "@/public/Gold-bloom.png"

export default function LoginForm({ submitForm }) {

    const [showPassword, setShowPassword] = useState({});
    const [formData, setFormData] = useState({});

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    }; 
 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));   
    };
   
    return (
        <div className='p-10 max-sm:px-5 my-10'>
            <div className='flex flex-col items-center p-10 max-sm:px-5 md:w-[620px] mx-auto rounded-2xl gap-5'>
            <Image alt="Logo" src={Logo} className=' h-24 object-cover  rounded-md' />
                <p className=''>Login here to access your account</p>
                <form onSubmit={submitForm} className='w-full'>
                    <div>
                        <label htmlFor="email" className='font-medium text-black'>E-mail or Username</label>
                        <input
                            type="email || text"
                            id="email"
                            name="email"
                            required
                            className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                            onChange={handleChange}

                        />
                        <label htmlFor="password" className='font-medium text-black'>Password</label>
                        <div className="relative">
                            <input
                                type={showPassword.password ? "text" : "password"}
                                id="password"
                                name="password"
                                required
                                className='w-full mb-2.5 px-5 py-2 text-lg text-black border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-3"
                                onClick={() => togglePasswordVisibility("password")}
                            >
                                {showPassword.password ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13.875 18.825a3.975 3.975 0 01-3.75 0m-1.425-1.2A9.015 9.015 0 012.08 12a9.014 9.014 0 016.62-6.62m1.425-1.2a3.975 3.975 0 013.75 0m1.425 1.2A9.015 9.015 0 0121.92 12a9.014 9.014 0 01-6.62 6.62m-1.425 1.2a3.975 3.975 0 01-3.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-5 w-5 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4.929 4.929a12 12 0 0114.142 0m0 0a12.046 12.046 0 013.463 7.071 12.046 12.046 0 01-3.463 7.071m-14.142 0a12.046 12.046 0 01-3.463-7.071 12.046 12.046 0 013.463-7.071m3.463 7.071a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0z"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mb-3">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            id="rememberMe"
                            className="mr-2"
                        />
                        <label htmlFor="rememberMe" className="text-lg text-black">
                            Remember Me
                        </label>
                    </div>
                    <button type="submit" className='w-full py-2.5 bg-button-color hover:bg-button-hover-color rounded-md font-medium'>Login Me</button>
                    <div className='text-lg text-center mt-7 tracking-wide'>
                        Forgot Password? <Link href="/forgetPassword" className='text-form-color underline'>Reset Password</Link>
                    </div>
                    <div className='text-lg text-center mt-2 tracking-wide'>
                        {` Don't`} have an account? <Link href="/register" className='text-form-color  underline'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
