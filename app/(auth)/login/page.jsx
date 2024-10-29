"use client";
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useAuth } from '@/hook/useAuth';
import Allrights from '@/components/Dashboard/Allrights';

export default function LoginPage() {
  const { login } = useAuth(); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rememberMe = formData.get('rememberMe') === 'on';

    await login(email, password, rememberMe);
  }; 

  return (
    <div>
      <LoginForm submitForm={handleSubmit} />
      <Allrights />
    </div>
  );
}
