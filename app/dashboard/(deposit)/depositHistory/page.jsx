"use client"
import { fetchDepositHistory } from '@/app/actions/fetchDepositHistory';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function DepositHistoryPage() {
  
  const [data, setData] = useState(null); 

  useEffect(() => {
    async function getData() { 
      try {
        const homeData = await fetchDepositHistory();
        setData(homeData.data);
      } catch (err) {
        throw new Error(err)
      }
    }
    getData();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl my-5 p-5'>
      <Table title="Deposit">
        <div className='grid grid-cols-5 p-3 border-b border-b-gray-500 w-[1440px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p className='-ml-1'>Serial</p>
          <p className='-ml-16'>From</p>
          <p className='-ml-20'>Amount</p>
          <p>Trx Hash</p>
          <p className='ml-40'>Date</p>
        </div>
        {Array.isArray(data) && data?.length > 0 ? (
          data.filter(deta => deta?.userWallet?.toLowerCase() === deta?.to?.toLowerCase())?.length > 0 ? ( data.filter(deta => deta?.userWallet?.toLowerCase() === deta?.to?.toLowerCase()).map((deta, index) => (
                <div key={deta?.id} className='grid grid-cols-5 p-3 border-b border-gray-500 w-[1440px] '>
                  <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                  <p className='-ml-52'>{deta.from_address}</p>
                  <p className='-ml-16'>${isNaN(Number(deta?.amount)) ? "0.00" : Number(deta?.amount).toFixed(2) }</p>
                  <p className='-ml-64'>{deta.txHash}</p>
                  <p className='ml-24'>{deta.created_at}</p>
                </div>
              ))
          ) : (
            <p className='text-center font-medium text-lg mt-2'>No data available Now</p>
          )
        ) : (
          <p className='text-center font-medium text-lg mt-2'>No data available</p>
        )}
      </Table>
    </div>
  )
}