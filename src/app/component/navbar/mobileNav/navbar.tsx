import { navLinks } from '@/constant/const';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type INav = {
  openNav : () => void
}


export default function Navbar({openNav}:INav) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    }
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    }
  })
    return (
      <div className={`${
        navBg ? "bg-white shadow-md" : "fixed"
      } transition-all duration-200 h-[12vh] z-[100] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
          {/* logo */}
        <div className='flex items-center space-x-2'>
          <h1 className='text-3xl md:text-xl lg:text-2xl xl:text-3xl'>Oralith</h1>
        </div>
          {/* navLinks */}
          <div className='hidden lg:flex items-center space-x-10'>
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.url}
                  key={link.id}
                  className='text-black hover:text-rose-500 font-semibold transition-all duration-200'
                ><p>{link.label}</p>
                </Link>
              )
            })}
          </div>
          <div className='flex items-center space-x-4'>
            <a href="#_" className="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Get Started</span>
            </a>
          </div>
          {/* burger menu for the mobile view */}
          <button
            className='lg:hidden flex flex-col justify-center items-center w-8 h-8 bg-gray-100 rounded-full'
            onClick={openNav}
          >
            <span className='w-4 h-0.5 bg-gray-600 rounded-full mb-1'></span>
            <span className='w-4 h-0.5 bg-gray-600 rounded-full mb-1'></span>
            <span className='w-4 h-0.5 bg-gray-600 rounded-full'></span>
          </button>
          </div>
        </div>
    );
}