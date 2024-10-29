import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'
import { Nunito } from "next/font/google";
import Topbar from '@/components/Dashboard/Topbar';
import Allrights from '@/components/Dashboard/Allrights';

const nunito = Nunito({ subsets: ["latin"] });

export default function DashboardLayout({ children }) {

  return (
    <div className={`h-screen overflow-clip w-full flex ${nunito.className}`}>
      <Sidebar />
      <div className='overflow-y-scroll px-5 w-[100vw]'>
      <Topbar />
        {children}
        <Allrights />
      </div>
    </div>
  )
}
