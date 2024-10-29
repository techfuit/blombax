"use client"
import { fetchBonusLeadership } from '@/app/actions/fetchBonusLeadership';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function LeadershipBonusPage() {

    const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchBonusLeadership();
        setData(data);
     
      } catch (err) {
        throw new Error(err)
      }
    }
    getData();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl '>
      <Table title="Leadership Bonus" >
        <div className='grid grid-cols-5 p-3 border-b border-b-gray-500 lg:w-full w-[1000px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p>Serial</p>
          <p>User</p>
          <p>Amount</p>
          <p>Total Amount</p>
          <p>Date</p>
        </div>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((deta, index) => (
            <div key={deta.id} className='grid grid-cols-5 p-3 border-b border-b-gray-500 lg:w-full w-[1000px]'>
              <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
              <p>${deta.to_user}</p>
              <p>{deta.amount}</p>
              <p>{deta.totalAmount}</p>
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
