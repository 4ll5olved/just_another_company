"use client";
import React, { useState } from 'react';
import Navbar from './mobileNav/navbar';
import MobileNav from './mobileNav/mobile.nav';



export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const openNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
    return (
      <div>
        <Navbar openNav={openNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler}/>  
      </div>
    );
}
