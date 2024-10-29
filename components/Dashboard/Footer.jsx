"use client"
import { Protest_Guerrilla } from 'next/font/google';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Meter from './Meter';
import { fetchHomeData } from '@/app/actions/fetchHomeData';

const protest = Protest_Guerrilla({ weight: '400', subsets: ["latin"] });

export default function Footer() {

  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const homeData = await fetchHomeData();
        setData(homeData);
      } catch (err) {
        throw new Error(err)
      }
    }
    getData();
  }, []);
  
  return (
    <div> 
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl mb-10 gap-5">
        <div className='rounded-2xl'>
          <div className='flex items-center gap-2 p-3 bg-blue-500 rounded-ss-2xl rounded-se-2xl'>
            <svg
              viewBox="0 0 640 512"
              fill="currentColor"
              className='size-7 '
            >
              <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" />
            </svg>
            <h1 className=' text-lg font-medium'>Rank Status</h1>
          </div>
          <div className='bg-[url("/rankbg.gif")] bg-center bg-cover h-96 rounded-es-2xl rounded-ee-2xl flex flex-col items-center justify-center'>
            <Image src="/levelLogo.png" alt="Rank Logo" height={500} width={500} className="size-80 animate-zoomInOut2" />
            <h2 className={` md:text-5xl text-4xl  text-[#00ACEE] ${protest.className}`}>Rank {data?.rank_status || "Learner"}</h2>
          </div>
        </div>
        <div className='rounded-2xl border'>
          <div className='flex items-center gap-2 p-3 bg-blue-500 rounded-ss-2xl rounded-se-2xl'>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className='size-7'
            >
              <path d="M8 4a.5.5 0 01.5.5V6a.5.5 0 01-1 0V4.5A.5.5 0 018 4zM3.732 5.732a.5.5 0 01.707 0l.915.914a.5.5 0 11-.708.708l-.914-.915a.5.5 0 010-.707zM2 10a.5.5 0 01.5-.5h1.586a.5.5 0 010 1H2.5A.5.5 0 012 10zm9.5 0a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zm.754-4.246a.389.389 0 00-.527-.02L7.547 9.31a.91.91 0 101.302 1.258l3.434-4.297a.389.389 0 00-.029-.518z" />
              <path
                fillRule="evenodd"
                d="M0 10a8 8 0 1115.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 010 10zm8-7a7 7 0 00-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 008 3z"
              />
            </svg>
            <h1 className=' text-lg font-medium'>Capping Limit</h1>
          </div>
          <div className='bg-glass-color glassBlur h-96 rounded-es-2xl rounded-ee-2xl flex items-center justify-center pb-5'>
            <Meter deta={data} />
          </div>
        </div>
      </div>
      <h2 className='text-xl gradient-text2 text-center font-semibold flex flex-col gap-1'>DFM Trade ! The Gateway of Success. <span className='pt-1.5'>{`"Transform Dreams into Reality Together."`} </span> </h2>
    </div>
  )
}
