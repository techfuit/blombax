"use client"
import { fetchReferList } from '@/app/actions/fetchReferList';
import Table from '@/components/Table'
import React, { useEffect, useState } from 'react'

export default function DirectNetwork() {
  const [referList, setReferList] = useState([]);

  useEffect(() => {
    const getReferList = async () => {
      try {
        const data = await fetchReferList();
        setReferList(data);
      } catch (error) {
        throw new Error(error)
      }
    };

    getReferList();
  }, []);

  return (
    <div className='bg-glass-color glassBlur rounded-2xl my-5 p-5'>
      <Table title="Direct Tree">
        <div className='grid grid-cols-6 p-3 border-b border-b-gray-500 xl:w-full w-[1100px] sticky top-0 left-0 bg-glass-color glassBlur'>
          <p>Serial</p>
          <p>User Name</p>
          <p>Full Name</p>
          <p className='mr-2 overflow-hidden'>Phone Number</p>
          <p>Position</p>
          <p>Date</p>
        </div>
            {referList.length > 0 ? (
              referList.map((user, index) => (
                <div key={user.id} className='grid grid-cols-6 p-3 border-b border-b-gray-500 xl:w-full w-[1100px]'>
                  <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                  <p>{user.username}</p>
                  <p>{user.name}</p>
                  <p className='mr-2 overflow-hidden'>{user.phone_number}</p>
                  <p>{user.side}</p>
                  <p>{user.created_at}</p>
                </div>
              ))
            ) : (
              <div className='p-3 text-center'>No data available</div>
            )}
      </Table>
    </div>
  )
}
