"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function RegistrationRewardage() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  }, [showConfetti]);

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    } 

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-2 px-4">

      <Image src="/DFM Logo Dark Mode.png" height={500} width={500} alt="DFM logo" className='w-32 h-12 flex items-center justify-center absolute top-10 left-20 max-sm:left-1/2 max-sm:-translate-x-1/2' />
      {showConfetti && windowSize.width && windowSize.height && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <h1 className="text-4xl lg:text-5xl text-center pb-10 font-bold gradient-text2">Congratulations</h1>
      <p className=" text-base sm:text-xl lg:text-2xl text-center mb-6">
      You will be Receive 20 USDT.
      </p>
      <Link href="/login" className="px-8 py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-sm md:text-base lg:text-lg text-white font-bold tracking-widest bg-gradient-to-r from-blue-500 to-purple-500 rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-600">
        Claim Your Reward
      </Link>
    </div>
  );
}
