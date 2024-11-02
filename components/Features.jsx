import React from 'react'
import LayoutCard from './LayoutCard'

export default function Features() {
  return (
    <div className='py-10' id="features">
      <LayoutCard>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='flex flex-col justify-center'>
            <h1 className='md:text-6xl text-5xl'>Bloombax </h1>
            <h1 className='gradient-text md:text-6xl text-5xl mb-8'>Features</h1>
            <p className='text-lg'>Explore, Engage, Empower - <br />
              Unleashing the Power of Crypto and Crowdfunding.</p>
          </div>
          <div className='flex gap-5 max-md:flex-col'>
            <div className='flex flex-col gap-2 max-md:gap-5'>
              <Card logo={<svg
                fill="currentColor"
                viewBox="0 0 16 16"
                className='size-10 text-white'
              >
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 000 2.5v11a.5.5 0 00.707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 00.78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0016 13.5v-11a.5.5 0 00-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
              </svg>} title='Cryptocurrency Education ' desc='Learn the basics of cryptocurrency, understand market trends, and make informed decisions about your financial journey.' />
              <Card logo={<svg
                viewBox="0 0 512 512"
                fill="currentColor"
                className='size-10 text-white'
              >
                <path d="M176 88v40h160V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56h144c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192v-16c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0v-76.1C0 215.2 5.1 203 14.1 194L66 142.1c9-9 21.2-14.1 33.9-14.1H128zM0 416v-80h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v16c0 17.7 14.3 32 32 32s32-14.3 32-32v-16h128v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z" />
              </svg>} title='Crowdfunding Toolkit' desc='Access a comprehensive toolkit to launch and manage your crowdfunding campaign effectively, from planning to execution.' />
            </div>
            <div className='flex flex-col gap-5 pt-6'>
              <Card logo={<svg
                viewBox="0 0 512 512"
                fill="currentColor"
                className='size-10 text-white'
              >
                <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zM415.5 128h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z" />
                <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z" />
              </svg>} title='Secure Crypto Wallets' desc='Safeguard your digital assets with our secure crypto wallets, ensuring peace of mind as you navigate the crypto landscape. ' />
              <Card logo={<svg
                viewBox="0 0 576 512"
                fill="currentColor"
                className='size-10 text-white'
              >
                <path d="M400 96v.7c-5.3-.4-10.6-.7-16-.7H256c-16.5 0-32.5 2.1-47.8 6-.1-2-.2-4-.2-6 0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4.3 4.2.3 8.4.7 12.6 1.3 17.6-20.5 43.8-33.6 73-33.6h32l-18.8 75.1c15.8 14.8 28.7 32.8 37.5 52.9H544c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-32c-9.1 12.1-19.9 22.9-32 32v64c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-32H256v32c0 17.7-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32v-64c-34.9-26.2-58.7-66.3-63.2-112H68c-37.6 0-68-30.4-68-68s30.4-68 68-68h4c13.3 0 24 10.7 24 24s-10.7 24-24 24h-4c-11 0-20 9-20 20s9 20 20 20h31.2c12.1-59.8 57.7-107.5 116.3-122.8 12.9-3.4 26.5-5.2 40.5-5.2h128zm64 136c0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24 24-10.7 24-24z" />
              </svg>} title='Transparent Transactions' desc='Experience transparency in all your transactions, ensuring trust and reliability in your crypto and crowdfunding endeavors ' />
            </div>
          </div>
        </div>
      </LayoutCard>
    </div>
  )
}


const Card = ({ logo, title, desc }) => {

  return (
    <div className='bg-[#d1d1d10a] border border-[#ffffff5b] glassBlur rounded-2xl p-8'>
      <div className='bg-blue-600 rounded-2xl p-5 size-16 mb-5 grid place-content-center'>{logo}</div>
      <h2 className='mb-2 text-xl font-semibold'>{title}</h2>
      <p className='opacity-80'>{desc}</p>
    </div>
  )
}