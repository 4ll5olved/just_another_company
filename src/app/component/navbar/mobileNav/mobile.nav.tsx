import { navLinks } from '@/constant/const';
import Link from 'next/link';
import React from 'react';
import 'boxicons/css/boxicons.min.css';

type IShow= {
  showNav: boolean;
  closeNav: () => void;
};

export default function MobileNav({closeNav, showNav}: IShow) {
  const navOpen = showNav?'translate-x-0': 'translate-x-[-100%]';
    return (
      <div>
        {/* overlay */}
        <div className={`fixed ${navOpen} inset-0 transform transition-all  duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>
        {/* navlink */}
        <div className={`text-white fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-slate-600 space-y-6 z-[1050]`}>
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm-text-[30px]'>{link.label}</p>
              </Link>
            )
          })}
        {/* close icon */}
        <button><i  onClick={closeNav} className='bx bx-x bx-lg absolute top-[0.7rem] right-[5rem] sm:w-6 sm:h-6 w-8 h-8 text-white'></i></button>
        </div>
      </div>
    );
}
