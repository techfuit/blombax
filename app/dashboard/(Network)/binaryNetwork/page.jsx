import SearchBar from '@/components/SearchBar'
import TreeStructure from '@/components/TreeStructure'
import React from 'react'

export default function BinaryNetworkPage() {
  return (
    <div className=' bg-glass-color glassBlur rounded-md my-5 overflow-hidden no-scrollbar relative'>
      <div className='absolute sm:top-16 sm:right-5 md:right-10 md:top-5 top-[64px] right-5 z-10'>
        <SearchBar />
      </div>
      <div className='overflow-scroll no-scrollbar2'>
        <TreeStructure />
      </div>
    </div>
  )
}
