import { cn } from '@/lib/cn'
import React from 'react'

export default function LayoutCard({ children, title, highlight }) {
  return (
    <div className={cn("h-full flex flex-col items-center gap-20  justify-center ")}>
      <div>
        <h1 className='md:text-5xl text-4xl font-semibold text-center w-full uppercase'>{title} <label className='gradient-text'>{highlight}</label>
        </h1>
      </div>
      <div className='flex max-md:flex-col items-center justify-center gap-5 max-md:gap-16'>
        {children}
      </div>
    </div>
  )
}
