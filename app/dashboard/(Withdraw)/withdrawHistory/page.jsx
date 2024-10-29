"use client"
import { fetchWithdrawtHistory } from '@/app/actions/fetchWithdrawHistory';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function WithdrawHistoryPage() {

  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const homeData = await fetchWithdrawtHistory();
        setData(homeData);
      } catch (err) {
        throw new Error(err)
      }
    }
    getData();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl '>
      <Table title="Withdraw" >
        <div className='grid grid-cols-7 p-3 border-b border-b-gray-500  w-[1600px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p className='-ml-2'>Serial</p>
          <p className='-ml-[180px]'>Amount</p>
          <p className='-ml-[320px]'>Withdraw Charge</p>
          <p className='-ml-[250px]'>Address</p>
          <p>Trx Hash</p>
          <p className='ml-[230px]'>Status</p>
          <p className='ml-32'>Date</p>
        </div>
        {Array.isArray(data) && data?.length > 0 ? (
          data.map((deta, index) => (
            <div key={deta?.id} className='grid grid-cols-7 p-3 border-b border-b-gray-500 w-[1600px]'>
              <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
              <p className='-ml-44'>${deta.amount}</p>
              <p className='-ml-[320px]'>${(deta.amount * 0.1).toFixed(2)}</p>
              <p className='-ml-[400px]'>{deta.to_address}</p>
              <p className='-ml-[210px]'>{deta.txHash}</p>
              <p className='ml-56'>{deta.status === "1" ? "Completed" : deta.status === "2" ? "Rejected" : "Pending" }</p>
              <p className='ml-28'>{deta.created_at}</p>
            </div>
          ))
        ) : (
          <p className='text-center font-medium text-lg mt-2'>No data available</p>
        )}
      </Table>
    </div>
  )
}
