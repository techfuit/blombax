"use client"
import { fetchPurchaseHistory } from '@/app/actions/fetchPurchaseHistory';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function PurchaseHistoryPage() {

  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchPurchaseHistory();
        setData(data);
      } catch (err) {
        throw new Error(err)
      }
    }
    getData();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl '>
      <Table title="Purchase" >
        <div className='grid grid-cols-5 p-3 border-b border-b-gray-500 xl:w-full w-[1000px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p>Serial</p>
          <p>Amount</p>
          <p>Package Name</p>
          <p>Duration (Hours)</p>
          <p className='ml-12'>Date</p>
        </div>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((deta, index) => (
                <div key={deta.id} className='grid grid-cols-5 p-3 border-b border-b-gray-500 xl:w-full w-[1000px] '>
                  <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                  <p>${isNaN(Number(deta?.amount)) ? "0.00" : Number(deta?.amount).toFixed(2)}</p>
                  <p>{deta.package_name}</p>
                  <p>{deta.nonRoi === "0" ? deta.duration : "0.00"}</p>
                  <p >{deta.created_at}</p>
                </div>
              ))
            ) : (
              <p className='text-center font-medium text-lg mt-2'>No data available</p>
            )}
      </Table>
    </div>
  )
}
