"use client"
import { fetchHomeData } from '@/app/actions/fetchHomeData'
import { cn } from '@/lib/cn'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Body() {
const [data, setData] = useState(null);

useEffect(() => {
  async function fetchData() {
    try {
      const homeData = await fetchHomeData()
      setData(homeData)
    } catch (error) {
      throw new Error(error)
    }
  }

  fetchData();
}, []);

  return (
    <div className='my-5 py-2 rounded-md'>
      <div className='pb-5'>
        <h2 className='text-center md:text-5xl text-4xl font-semibold md:font-bold '> <span className='gradient-text2 '>Welcome to DFM</span>  <span className='text-blue-500'>Dashbaord</span> </h2>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        <div className={cn('bg-glass-color glassBlur rounded-2xl p-3 flex items-center justify-center gap-3 min-h-32')}>
          <div className='rounded-2xl bg-orange-500 p-2'>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              className='size-20 p-1'
            >
              <path d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 00-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514 852 501.6 912 433.7 912 352V204a44 44 0 00-44-44zM184 352V232h64v207.6a91.99 91.99 0 01-64-87.6zm520 128c0 49.1-19.1 95.4-53.9 130.1-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9-34.8-34.8-53.9-81-53.9-130.1V184h384v296zm136-128c0 41-26.9 75.8-64 87.6V232h64v120z" />
            </svg>
          </div>
          <div className='flex items-center justify-center flex-col'>
            <h2 className='md:text-2xl text-xl gradient-text2 font-semibold mb-2'>Account Status</h2>
            <button className={` text-black text-lg font-semibold px-5 py-2.5 rounded-md ${data?.rank_status ? "bg-green-500 hover:bg-green-600" : " bg-[#bbec0a] hover:bg-[#a2cc26]"}`}>{data?.rank_status || "Inactive"}</button>
          </div>
        </div>
        <Card title="Deposit" amount={isNaN(Number(data?.deposit)) ? "0.00" : Number(data?.deposit).toFixed(2)}/>
        <Card title="Total Deposit" amount={isNaN(Number(data?.deposit)) ? "0.00" : Number(data?.deposit).toFixed(2)}/>
        <Card title="Withdraw" amount={isNaN(Number(data?.withdraw )) ? "0.00" : Number(data?.withdraw ).toFixed(2)} />
        <Card title="Total Withdraw" amount={isNaN(Number(data?.total_withdraw)) ? "0.00" : Number(data?.total_withdraw).toFixed(2)} />
        <Card title="Staking Reward" amount={isNaN(Number(data?.roi_bonus)) ? "0.00" : Number(data?.roi_bonus).toFixed(2)} />
        <Card title="Direct Bonus" amount={isNaN(Number(data?.direct_bonus)) ? "0.00" : Number(data?.direct_bonus ).toFixed(2)} />
        <Card title="Team Bonus" amount={isNaN(Number(data?.team_bonus)) ? "0.00" : Number(data?.team_bonus ).toFixed(2)} />
        <Card title="Equity" amount={isNaN(Number(data?.matching_bonus)) ? "0.00" : Number(data?.matching_bonus).toFixed(2)} />
        <Card title="Rank & Reward" amount={isNaN(Number(data?.rank_reward)) ? "0.00" : Number(data?.rank_reward).toFixed(2)} />
      </div>
    </div>
  ) 
}

const Card = ({ title, amount }) => {
  return (
    <div className='bg-glass-color glassBlur2 rounded-2xl p-3 pl-5 flex items-center gap-5 min-h-32'>
      <div className='animate-zoomInOut'>
        <Image src="/3DIcon1.png" height={400} width={400} className='size-20' alt='Wallet' />
      </div>
      <div className='flex items-start flex-col'>
        <h2 className='text-lg font-medium'>{title}</h2>
        <p className='text-lg font-semibold '>${" "}{amount}</p>
      </div>
    </div>
  )
}