"use client"
import { cn } from '@/lib/cn'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {


  const navData = [
    { title: "Home", link: "#home" },
    { title: "Crypto", link: "#crypto" },
    { title: "About", link: "#about" },
    { title: "Crowdfunding", link: "#crowdfunding" },
    { title: "Features", link: "#features" },
    
  ]

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);


  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  }

  const handleLinkClick = (e) => {
    const targetId = e.target.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    closeMenu(); // Close the menu after clicking a link
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={cn('flex items-center justify-between fixed top-0 left-0 w-full px-10', isScrolled && "fixed top-0 left-0 w-full px-10 z-20 animate-fadeInDown bg-base-glass-color backdrop-blur-md shadow-shadow-bg ")}>
      <div className='w-32 h-20 flex items-center justify-center'>
        <Image src="/DFM Logo Dark Mode.png" height={500} width={800} priority alt="DFM logo" className='object-contain' />
      </div>
      <div className={cn("lg:flex hidden", isOpen && "flex gap-5 fixed top-0 left-0 rounded-md bg-[#0000005d]  h-screen z-10 w-full")}>
        <div className={cn(isOpen && "flex flex-col items-center justify-center w-60 bg-base-glass-color glassBlur ")}>
          <div className={cn(isOpen ? "block" : "hidden")}>
            <Image src="/DFM Logo Dark Mode.png" height={500} width={500} alt="DFM logo" className='w-32 h-12 flex items-center justify-center absolute top-10 left-5' />
            <button className='absolute top-0 right-0 p-2' onClick={closeMenu}>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className='size-8'
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </button>
          </div>
          {navData.map((nav) => (
            <Link href={nav.link} key={nav.title} className={cn("hover:bg-base-color px-4 py-2.5 rounded-md text-lg  font-medium tracking-widest", isOpen && "w-48")} onClick={handleLinkClick} >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='flex gap-2'>
        <Link href="/login" className=" text-lg bg-button-color hover:bg-button-hover-color px-5 py-2.5 rounded-full font-medium hover:scale-105 ">
          Login
        </Link>
        <div className={cn(" lg:hidden flex items-center justify-center ")} onClick={toggleMenu}>
        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
     className='size-8'
    >
      <path d="M20 11H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1zM4 8h16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1zm16 8H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1z" />
    </svg>
        </div>
      </div>
    </div>
  )
}