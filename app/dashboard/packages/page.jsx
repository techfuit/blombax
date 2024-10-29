"use client"
import { fetchPackageList } from '@/app/actions/fetchPackageList'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function PackagesPage() {
  const [packages, setPackages] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPackageList()
        setPackages(response)
        setLoading(false)
      } catch (error) {
        setLoading(true)
      }
    }
    fetchData()
  },[])
  
  return (
    <div className='rounded-2xl my-5 py-5'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
       { loading ? <div className='text-center text-4xl gradient-text2'>Loading...</div> : packages?.map((data) => (
         <Card key={data.id} name={data.title} minprice={data.min_price} maxprice={data.max_price} percent={parseFloat(data.return_rate)} duration={data.duration} />
       ))} 
      </div>
    </div>
  )
}

const Card = ({ name, minprice, maxprice, percent, duration }) => {

  return (
    <div className='bg-glass-color glassBlur rounded-2xl px-5 pt-6 pb-8'>
      <h2 className='md:text-5xl text-4xl font-bold text-center gradient-text2 mb-10'>{name}</h2>
      <p className='text-center font-semibold text-lg border-b border-b-blue-500 py-1 '>Every Hours</p>
      <p className='text-center font-semibold text-lg border-b border-b-blue-500 py-1  '>Returns<span> - {percent}</span></p>
      <p className='text-center font-semibold text-lg border-b border-b-blue-500 py-1 '>Duration <span> - {duration} Hours</span></p>
      <div className=' flex items-center justify-center font-bold  sm:text-2xl text-xl mt-8 mb-2'>${minprice} - ${maxprice}</div>
      <div className='w-full'>
        <Link 
        href={{ pathname: '/dashboard/purchaseNow', query: { name: name, minprice: minprice, maxprice: maxprice } }} 
        className='flex items-center justify-center mx-auto w-40 h-10 mt-5 '><button className='bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-pink-500 hover:to-orange-500 text-gray-50 py-2 px-4 rounded-md font-semibold text-xl'>Buy Now</button></Link>
      </div>
    </div>
  )
}

