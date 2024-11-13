"use client";
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';
import Image from 'next/image';
import CountryInput from './CountryInput';
import PhoneNumberInput from './PhoneNumberInput';
import { fetchCheckUserExistByUsername } from '@/app/actions/fetchCheckUserExistsByUsername';
import Logo from "@/public/Logo.png"

function Register () {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState({});
  const [loading, setLoading] = useState(false)

  const searchParams = useSearchParams();
  const side = searchParams.get("side")
  const [formData, setFormData] = useState({
    refered_by: '',
    side: '',
    name: '',
    username: '',
    country: '',
    phone_number: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isReferralLocked, setIsReferralLocked] = useState(false);
  const [isSideLocked, setIsSideLocked] = useState(false);

  const fetchReferralData = async (username) => {
    try {
        const response = await fetch(`https://api.dfmtrade.com/api/checkUserSideByUsername?username=${username}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Ensure response is in JSON format before parsing
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            const data = await response.json();

            // Check for the expected structure
            if (data.status && data.userData) {
                const { userData } = data;
                return userData;
            } else {
                throw new Error('Unexpected response format');
            }
        } else {
            throw new Error('Unexpected content type');
        }
    } catch (error) {
        throw error; 
    }
};

  

  useEffect(() => {
    const referral_by = searchParams.get("referral_by")?.replace(/["']/g, "");
    const side = searchParams.get("side")
    const fetchReferral = async () => {
        try {
            if (referral_by) {
                const userData = await fetchReferralData(referral_by)
                if (userData) {
                    setFormData(prev => ({
                        ...prev,
                        refered_by: userData.username,
                        side: side ,
                    }));
                    setIsReferralLocked(true);
                    setIsSideLocked(true);
                }
            }
        } catch (err) {
            toast.error('Error fetching referral user data');
        }
    };

    fetchReferral(); 
}, [searchParams]);

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
  
  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault();

    const formsData = new FormData(event.target);

    const data = {
      refered_by: formsData.get('refered_by'),
      name: formsData.get("name"),
      username: formsData.get("username"),
      country: formsData.get("country"),
      phone_number: formsData.get("phone_number"),
      email: formsData.get("email"),
      password: formsData.get("password"),
      confirmPassword: formsData.get("confirmPassword"),
      side: formsData.get("side") || formData.side
    };

    if (!data.phone_number) {
      toast.error("Phone number is required", { duration: 2000 });
      setLoading(false)
      return;
    }

    const usernamePattern = /^[a-zA-Z0-9]{3,}$/;
    
    if (/\s/.test(data.username) || !usernamePattern.test(data.username)) {
      let errorMessage = "Username must be at least 3 characters long and contain only letters and numbers.";
      if (/\s/.test(data.username)) {
        errorMessage = "Username cannot contain spaces.";
      }
      toast.error(errorMessage, { duration: 2000 });
      setLoading(false)
      return;
    }

    if (!data.side) {
      toast.error("Side is required", { duration: 2000 });
      setLoading(false)
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Z|a-z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Invalid email address", { duration: 2000 });
      setLoading(false)
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
    if (!passwordPattern.test(data.password)) {
      toast.error("Password must be at least 4 characters long and contain at least one uppercase letter and one lowercase letter", { duration: 2000 });
      setLoading(false)
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match", { duration: 2000 });
      setLoading(false)
      return;
    }

    if (!isReferralLocked && data.refered_by) {
      try {
        const userCheckData = await fetchCheckUserExistByUsername({ username: data.refered_by });
        if (!userCheckData || !userCheckData.username) {
          toast.error('Invalid referral username');
          setLoading(false)
          return;
        }
      } catch (error) {
        toast.error('Error checking referral username');
        setLoading(false)
        return;
      }
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
      });

      const contentType = response.headers.get('Content-Type');
      const rawResponseText = await response.text();

      if (contentType && contentType.includes('application/json')) {
        const parsedData = JSON.parse(rawResponseText);
        if (!response.ok) {
          toast.error(parsedData.error || "Network response was not ok");
          setLoading(false)
        }
        if(parsedData.status === false){
          toast.error(parsedData.reason)
          setLoading(false)
          return
        }
        toast.success("Registation successful");
       setLoading(false)
        router.push("/RegistrationReward");
      } else {
        toast.error('Unexpected response format');
        setLoading(false)
      }
    } catch (error) {
      toast.error(error.message, { duration: 2000 });
      setLoading(false)
    }
  }; 

  return (
    <div className='p-10 max-sm:px-5 my-10'>
      <div className='flex flex-col items-center max-sm:px-5 p-10 md:w-[620px] mx-auto rounded-2xl gap-5'>
        <Image alt="Logo" src={Logo} className='h-24 object-cover rounded-md' />
        <p className='lg:text-2xl text-lg font-semibold'>Register</p>
        <form onSubmit={handleSubmit} className='w-full'>

          {/* Form Field */}
          <div className='flex flex-col max-sm:gap-3'>
            <div className='flex sm:gap-5 max-sm:flex-col '>
              <div className='sm:w-1/2 w-full'>
                <label htmlFor="country" className='font-medium text-black' >Country</label>
                <CountryInput name="country" id="country" onChange={handleChange} />
              </div>
              <div className='sm:w-1/2 w-full'>
                <label htmlFor="phone" className='font-medium text-black'>Phone Number</label>
                <PhoneNumberInput
                  name="phone_number"
                  id="phone_number"
                  value={formData.value || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='flex sm:gap-5 max-sm:flex-col '>
              <div className='sm:w-1/2 w-full'>
                <label htmlFor="name" className='font-medium text-black'>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                  onChange={handleChange}
                />
              </div>
              <div className='sm:w-1/2 w-full'>
                <label htmlFor="username" className='font-medium text-black'>User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  minLength={4}
                  required
                  className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='w-full max-sm:-my-3'>
              <label htmlFor="email" className='font-medium text-black'>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                onChange={handleChange}
              />
            </div>
            <div className='flex sm:gap-5 max-sm:flex-col '>
              <div className='sm:w-1/2 w-full'>
                <label htmlFor="password" className='font-medium text-black'>Password</label>
                <div className="relative">
                  <input 
                    type={showPassword.password ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    className='w-full mb-2.5 px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
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
              <div className='sm:w-1/2 w-full'>
                <label htmlFor="confirmPassword" className='font-medium text-black'>Confirm Password</label>
                <div className="relative">
                  <input
                    type={showPassword.confirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    className='w-full px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none mt-1 focus:ring-1 bg-transparent'
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    {showPassword.confirmPassword ? (
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
            </div>

              <div className='w-full'>
                <label htmlFor="refered_by" className='font-medium text-black'>Referral ID</label>
                <input
                  type="text"
                  id="refered_by"
                  name="refered_by"
                  required
                  className='w-full px-5 py-2 text-lg border border-opacity-60 border-black rounded-md focus:outline-none focus:ring-1 bg-transparent mb-2.5 mt-1'
                  onChange={handleChange}
                  value={formData.refered_by}
                  readOnly={isReferralLocked}
                />
              </div>
              
            {/* Form Field */}
            <div className='mb-3 flex justify-center'>
              <label htmlFor="tc">
                <input type="checkbox" name='tc' id='tc' className='mr-1' required /> I accept the Terms and Conditions
              </label>
            </div>
            <button type="submit" className='w-full py-2.5 bg-button-color hover:bg-button-hover-color rounded-md disabled:cursor-not-allowed' disabled={loading}>Register Now</button>
            <div className='text-lg text-center mt-5'>
              Already have an account? <Link href="/login" className='text-form-color tracking-wide underline'>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 


export default function RegisterForm({ submitForm }) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Register submitForm={submitForm} />
    </Suspense>
  )
}