"use client";
import React from "react";
import RegisterForm from "@/components/RegisterForm";
import Allrights from "@/components/Dashboard/Allrights";

export default function RegisterPage() {
  return (
    <div className='min-h-screen'>
      <RegisterForm />
      <Allrights />
    </div>
  );
}
