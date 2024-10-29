import { cn } from '@/lib/cn';
import React from 'react';

export default function Table({ title, children, className }) {
    return (
        <div className='my-5 overflow-hidden w-full'>
            <div className={cn('bg-blue-500 px-5 py-3 rounded-ss-2xl rounded-se-2xl', className)}>
                <p className='text-2xl font-medium'>{title} History </p>
            </div>
            <div className='min-h-20 bg-base-glass-color rounded-es-2xl rounded-ee-2xl'>
                <div className='overflow-hidden h-80'>
                    <div className='overflow-scroll h-full'>
                        {children}
                    </div></div>
            </div>
        </div>
    );
}
