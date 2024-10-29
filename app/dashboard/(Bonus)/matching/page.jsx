"use client"
import { fetchBonusMatching } from '@/app/actions/fetchBonusMatching';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function MatchingBonusPage() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchBonusMatching();
        setData(data);
     
      } catch (err) {
        throw new Error(err)
      }
    }
    getData();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl '>
      <Table title="Matching Bonus" >
        <div className='grid grid-cols-4 p-3 border-b border-b-gray-500 lg:w-full w-[900px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p>Serial</p>
          <p>Amount</p>
          <p>Level</p>
          <p>Date</p>
        </div>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((deta, index) => (
            <div key={deta.id} className='grid grid-cols-4 p-3 border-b border-b-gray-500 lg:w-full w-[900px]'>
              <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
              <p>${deta.amount}</p>
              <p>{deta.generation}</p>
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