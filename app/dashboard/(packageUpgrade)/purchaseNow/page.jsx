"use client";
import { fetchPackageData } from '@/app/actions/fetchPackageData';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchDepositeData } from '@/app/actions/fetchDepositeData';
import { fetchCheckTransactionStatus } from '@/app/actions/fetchCheckTransactionStatus';
import { fetchHomeData } from '@/app/actions/fetchHomeData';

function PurchaseNow() {
  const searchParams = useSearchParams();
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(100);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [loading, setLoading] = useState(false)
  const [packageName, setPackageName] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const homeData = await fetchHomeData()
        setData(homeData)
      } catch (error) {
        throw new Error(error)
      }
    }
  
    fetchData();
  }, []);

  useEffect(() => {
    const name = searchParams.get('name');
    const minprice = parseFloat(searchParams.get('minprice')) || 100;
    const maxprice = parseFloat(searchParams.get('maxprice')) || 10000;

    if (name) setPackageName(name);
    setMinPrice(minprice);
    setMaxPrice(maxprice);
    setAmount(minprice);
  }, [searchParams]);


  const handleAmountChange = (e) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(newAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    if (minPrice > amount > maxPrice) {
      toast.error("Invalid amount")
      setLoading(false)
      return
    }

    if (amount < minPrice) {
      toast.error(`Amount is below the minimum price of $${minPrice}.`);
      setLoading(false)
      return;
    }

    if (amount > maxPrice) {
      toast.error(`Amount exceeds the maximum price of $${maxPrice}.`);
      setLoading(false)
      return;
    }

    if (amount > data?.deposit) {
      toast.error('Insufficient balance.');
      setLoading(false)
      return;
    }

    try {
      const deta = await fetchPackageData(amount);
      setPackageName(deta.title);
    } catch (error) {
      toast.error('Failed to fetch package data');
      return;
    }

    try {
      const { status, transaction_hash } = await fetchDepositeData({ amount });

      if (status === true) {
        await pollTransactionStatus(transaction_hash);

        if (response.status === true) {
          toast.success('Transaction successful');
          setLoading(false)
          window.location.reload("/dashboard/purchaseNow")
        } else {
          toast.error('Transaction failed. Please try again.');
        }
      } else {
        toast.error("Transaction Failed")
        setLoading(false)
        return
      }
    } catch (error) {
      return
    } finally{
      setLoading(false)
    }
  };

  const pollTransactionStatus = async (transactionHash) => {
    try {
      const initialResponse = await fetchCheckTransactionStatus({ trx: transactionHash });

      if (initialResponse.status === true) {
        toast.success('Transaction successful');
        return 
      } else{
        toast.loading("Wait for some time", {duration: 2000})
      }

      await new Promise(resolve => setTimeout(resolve, 7000));

      const secondResponse = await fetchCheckTransactionStatus({ trx: transactionHash });
      toast.success('Transaction successful');
      window.location.replace("/dashboard/withdrawHistory")
      return secondResponse.status === true   
    } catch (error) {
      toast.error('Failed to check transaction status');
      return false;
    } 
  };

  return (
    <div className='bg-glass-color glassBlur rounded-2xl my-5 p-5'>
      <h2 className='text-4xl font-bold gradient-text2 text-center mb-8'>Purchase</h2>
      <p className='text-2xl font-bold text-center mb-4'>Available Deposit Balance <span className='text-blue-500'>${data?.deposit || 0.00}</span> </p>
      <form onSubmit={handleSubmit} className='flex items-center flex-col gap-5 justify-center px-5 pb-5'>
        <div className='flex flex-col gap-1 justify-center w-full sm:w-[500px]'>
          <label htmlFor="packageName">Package Name</label>
          <input
            type="text"
            id='packageName'
            name='packageName'
            value={packageName}
            disabled
            className=' w-full px-3 py-2.5 bg-transparent ring-1 outline-none rounded-md '
          />
        </div>
        <div className='flex flex-col gap-1 justify-center w-full sm:w-[500px]'>
          <label htmlFor="amount">Amount (Min ${minPrice} - Max ${maxPrice})</label>
          <input
            type="number"
            id='amount'
            name='amount'
            placeholder={`Amount between $${minPrice} and $${maxPrice}`}
            value={amount}
            required
            onChange={handleAmountChange}
            className='w-full px-3 py-2.5 bg-transparent ring-1 outline-none rounded-md'
          />
        </div>
        <button
          type="submit" aria-disabled={loading} disabled={loading}
          className='flex items-center justify-center px-4 py-2.5 bg-button-color rounded-md hover:bg-button-hover-color hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {loading ? (
            <>
              <svg viewBox="0 0 16 16" fill="currentColor"
                className="size-6 mr-2 text-white animate-spin">
                <path fill="currentColor"
                  d="M8 4.736a.933.933 0 01-.933-.933V1.005a.933.933 0 011.866 0v2.798A.933.933 0 018 4.736zM8 15.577a.583.583 0 01-.583-.583v-2.798a.583.583 0 111.166 0v2.798a.583.583 0 01-.583.583zM5.902 5.24a.875.875 0 01-.758-.437L3.745 2.38a.874.874 0 011.514-.874l1.399 2.423a.874.874 0 01-.756 1.311zM11.498 14.582a.525.525 0 01-.455-.262l-1.399-2.423a.525.525 0 11.909-.525l1.399 2.423a.525.525 0 01-.454.787zM4.365 6.718a.813.813 0 01-.407-.109L1.535 5.21a.817.817 0 01.816-1.414l2.423 1.399a.817.817 0 01-.408 1.523zM14.057 11.964a.461.461 0 01-.233-.063l-2.423-1.399a.467.467 0 01.466-.808l2.423 1.399a.467.467 0 01-.233.87zM3.803 8.758H1.005a.758.758 0 010-1.516h2.798a.758.758 0 110 1.516zM14.995 8.466h-2.798a.466.466 0 110-.932h2.798a.466.466 0 110 .932zM1.943 12.197a.698.698 0 01-.35-1.305l2.423-1.399a.698.698 0 11.699 1.211l-2.423 1.399a.69.69 0 01-.349.094zM11.635 6.368a.466.466 0 01-.233-.87l2.423-1.399a.466.466 0 11.466.808l-2.423 1.399a.469.469 0 01-.233.063zM4.502 14.699a.64.64 0 01-.555-.962l1.399-2.423a.641.641 0 111.111.641l-1.399 2.423a.64.64 0 01-.556.321zM10.098 4.832a.467.467 0 01-.404-.7l1.399-2.423a.467.467 0 01.808.466l-1.399 2.423a.464.464 0 01-.404.233z"
                />
              </svg>
              Submitting...
            </>) : ("Submit")
            }
        </button>
      </form>
    </div>
  );
}

export default function PurchaseNowPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PurchaseNow />
    </Suspense>
  );
}
