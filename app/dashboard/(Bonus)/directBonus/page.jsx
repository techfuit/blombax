"use client"
import { fetchBonusDirect } from '@/app/actions/fetchBonusDirect';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function DirectBonusPage() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchBonusDirect();
        setData(data);
      } catch (err) {
        throw new Error(err)
      }
    } 
    getData();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl '>
      <Table title="Direct Bonus">
      <div className='grid grid-cols-6 p-3 border-b border-b-gray-500 xl:w-full w-[1100px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p>Serial</p>
          <p>Amount</p>
          <p>User Name</p>
          <p>Package Name</p>
          <p>Purchase Amount</p>
          <p>Date</p>
        </div>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((deta, index) => (
            <div key={deta.id} className='grid grid-cols-6 p-3 border-b border-b-gray-500 xl:w-full w-[1100px]'>
              <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
              <p>${deta.amount}</p>
              <p>{deta.fromUsername}</p>
              <p className='overflow-hidden'>{deta.package_name}</p>
              <p className='overflow-hidden'>${deta.purchaseAmount}</p>
              <p>{deta.created_at}</p>
            </div>
          ))
        ) : (
          <p className='text-center font-medium text-lg mt-2'>No data available</p>
        )}
      </Table>
    </div>

  )
}
