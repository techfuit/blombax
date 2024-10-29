import Topbar from '@/components/Dashboard/Topbar'
import Table from '@/components/Table'
import React from 'react'

export default function SupportPage() {
  return (
    <div>
      <div className='bg-glass-color glassBlur rounded-2xl my-5 p-5 '>
        <div className=' md:w-1/2 w-full '>
          <div className='bg-blue-500 p-3 rounded-ss-2xl rounded-se-2xl '>
            <p className='text-2xl font-medium'>Help & Support</p>
          </div>
          <div className='min-h-20 bg-base-glass-color rounded-es-2xl rounded-ee-2xl'>
            <div className='w-full p-5'>
              <form action='' className='flex flex-col items-start'>
                <label htmlFor="withdraw" className='font-medium gradient-text2 text-lg'>Subject</label>
                <input type="text" id='withdraw' name="withdraw" className='mb-3 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg w-full' placeholder='Enter subject' required />

                <label htmlFor="message" className='font-medium gradient-text2 text-lg'>Message</label>
                <textarea name="message" id="message" className='mb-7 mt-1 px-3 py-2 bg-transparent outline-none border border-slate-300 rounded-md text-lg h-28 w-full' placeholder='Type your message here' required />

                <button className='px-5 py-2.5 bg-blue-500 rounded-md text-lg font-medium hover:bg-blue-600 tracking-wide'>Submit Message</button>
              </form>
            </div>
          </div>
        </div>
        <Table title="Support" />
      </div>
    </div>
  )
}
