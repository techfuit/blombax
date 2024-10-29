"use client"
import { useAuth } from '@/hook/useAuth';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function PasswordUpdateForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({});
  let {user} = useAuth()
  let currentUser = user

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const oldPassword = formData.get('oldPassword');
    const newPassword = formData.get('newPassword');
    const confirmPassword = formData.get('conPassword');

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

    if (!passwordPattern.test(newPassword)) {
      toast.error("New password must be at least 4 characters long and contain at least one uppercase letter and one lowercase letter", { duration: 2000 });
      setLoading(false);
      return;
    }

    if (!passwordPattern.test(confirmPassword)) {
      toast.error("Confirm password must be at least 4 characters long and contain at least one uppercase letter and one lowercase letter", { duration: 2000 });
      setLoading(false);
      return;
    }

    if (newPassword === currentUser.password) {
      toast.error('New password cannot be the same as the current password', { duration: 2000 });
      setLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match', { duration: 2000 });
      setLoading(false);
      return;
    }

    if (oldPassword !== currentUser.password) {
      toast.error('Current password is incorrect', { duration: 2000 });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/updatepassword', {
        method: 'POST',
        body: formData,
      });

      let result;
      try {
        result  = await response.json();
      } catch (err) {
        throw new Error('Unexpected response format, expected JSON');
      }

      if (!response.ok) {
        toast.error(result.error || 'Failed to update password');
      } else {
        toast.success('Password updated successfully');
  
        window.location.reload();
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-start'>
      <div className='relative w-full'>
        <label htmlFor="oldPassword" className='font-medium gradient-text2'>Current Password </label>
        <input 
          type={showPassword.oldPassword ? "text" : "password"}
          id='oldPassword' 
          name="oldPassword" 
          className='mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full' 
          required 
        />
        <button
          type="button"
          className="absolute right-3 top-10"
          onClick={() => togglePasswordVisibility("oldPassword")}
        >
          {showPassword.oldPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825a3.975 3.975 0 01-3.75 0m-1.425-1.2A9.015 9.015 0 012.08 12a9.014 9.014 0 016.62-6.62m1.425-1.2a3.975 3.975 0 013.75 0m1.425 1.2A9.015 9.015 0 0121.92 12a9.014 9.014 0 01-6.62 6.62m-1.425 1.2a3.975 3.975 0 01-3.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.929 4.929a12 12 0 0114.142 0m0 0a12.046 12.046 0 013.463 7.071 12.046 12.046 0 01-3.463 7.071m-14.142 0a12.046 12.046 0 01-3.463-7.071 12.046 12.046 0 013.463-7.071m3.463 7.071a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0z" />
            </svg>
          )}
        </button>
      </div>

      <div className='relative w-full'>
        <label htmlFor="newPassword" className='font-medium gradient-text2'>New Password </label>
        <input 
          type={showPassword.newPassword ? "text" : "password"} 
          id='newPassword' 
          name="newPassword" 
          className='mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full' 
          required 
        />
        <button
          type="button"
          className="absolute right-3 top-10"
          onClick={() => togglePasswordVisibility("newPassword")}
        >
          {showPassword.newPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825a3.975 3.975 0 01-3.75 0m-1.425-1.2A9.015 9.015 0 012.08 12a9.014 9.014 0 016.62-6.62m1.425-1.2a3.975 3.975 0 013.75 0m1.425 1.2A9.015 9.015 0 0121.92 12a9.014 9.014 0 01-6.62 6.62m-1.425 1.2a3.975 3.975 0 01-3.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.929 4.929a12 12 0 0114.142 0m0 0a12.046 12.046 0 013.463 7.071 12.046 12.046 0 01-3.463 7.071m-14.142 0a12.046 12.046 0 01-3.463-7.071 12.046 12.046 0 013.463-7.071m3.463 7.071a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0z" />
            </svg>
          )}
        </button>
      </div>

      <div className='relative w-full'>
        <label htmlFor="conPassword" className='font-medium gradient-text2'>Confirm Password </label>
        <input 
          type={showPassword.conPassword ? "text" : "password"} 
          id='conPassword' 
          name="conPassword" 
          className='mb-5 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full' 
          required 
        />
        <button
          type="button"
          className="absolute right-3 top-10"
          onClick={() => togglePasswordVisibility("conPassword")}
        >
          {showPassword.conPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825a3.975 3.975 0 01-3.75 0m-1.425-1.2A9.015 9.015 0 012.08 12a9.014 9.014 0 016.62-6.62m1.425-1.2a3.975 3.975 0 013.75 0m1.425 1.2A9.015 9.015 0 0121.92 12a9.014 9.014 0 01-6.62 6.62m-1.425 1.2a3.975 3.975 0 01-3.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5 text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.929 4.929a12 12 0 0114.142 0m0 0a12.046 12.046 0 013.463 7.071 12.046 12.046 0 01-3.463 7.071m-14.142 0a12.046 12.046 0 01-3.463-7.071 12.046 12.046 0 013.463-7.071m3.463 7.071a4.5 4.5 0 019 0 4.5 4.5 0 01-9 0z" />
            </svg>
          )}
        </button>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className='bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded-md font-medium'>
        {loading ? "Updating..." : "Update"}
      </button>
    </form>
  );
}
