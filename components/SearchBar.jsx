"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState } from 'react'

 function Search() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const [term, setTerm] = useState("")

    useEffect(() => {
        if (!term.trim()) {
            const params = new URLSearchParams(searchParams);
            params.delete('query');
            replace(`${pathname}?${params.toString()}`);
        }
    }, [term, searchParams, pathname, replace]);

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams)

        if (term.trim()) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className='flex flex-col'>
            <div className='relative '>
                <input
                    type="text"
                    name='query'
                    id='query'
                    className='outline-transparent rounded-lg ring-1 bg-transparent pr-11 pl-3 py-2.5 sm:w-60 w-52 '
                    value={term} placeholder='Username...'
                    onChange={(e) => setTerm(e.target.value)} // Update term state on input change
                    onKeyDown={handleKeyDown} // Handle Enter key press
                />
                <button
                    className='absolute top-[6px] right-[6px] bg-blue-500 hover:bg-blue-600 rounded-full p-1'
                    onClick={handleSearch} // Handle the button click event
                >
                    <svg
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className='size-6'
                    >
                        <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default function SearchBar() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Search />
      </Suspense>
    );
  }