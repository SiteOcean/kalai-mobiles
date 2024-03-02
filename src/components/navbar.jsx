import React, { useState } from 'react';
import Link from 'next/link';
import { LuMenuSquare } from "react-icons/lu";
import { useRouter } from 'next/router';
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter(null)
  return (
    <nav className="bg-blue-500 p-4 z-50 sticky top-0">
      <div className={`container mx-auto  sm:flex justify-between  sm:gap-0 items-center `}>
        {/* Brand/Logo */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">
           Sulur Service Center
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="text-white text-[37px] sm:hidden  absolute top-3 right-3">
          <button onBlur={()=>setMenuOpen(false)}
            onClick={() => setMenuOpen(!menuOpen)}
            className=" focus:outline-none duration-500"
          >
            {menuOpen ? <MdOutlineClose className='duration-500'/>:
            <LuMenuSquare className='duration-500'/>}
          
          </button>
        </div>


        {/* Navigation Links */}
        <div className={`hidden sm:block `}>
          <div className="text-white flex flex-col sm:flex-row font-bold justify-center items-center space-y-2 sm:space-y-0 sm:space-x-5 md:space-x-9">
          
          <Link href="/" className={`${router.pathname === "/" ? "text-blue-100 underline underline-offset-4" :""}`}>
              Home
            </Link>
            <Link href="/about" className={`${router.pathname === "/about" ? "text-blue-100 underline underline-offset-4" :""}`}>
             About
            </Link>
            <Link href="/contact" className={`${router.pathname === "/contact" ? "text-blue-100 underline underline-offset-4" :""}`}>
              Contact
            </Link>
            <Link href={'/offerZone'} className={`text-[20px] flex items-center justify-center gap-x-2 pt-1  text-[yellow] relative ${router.pathname === "/offerZone" ? "underline underline-offset-4" :" animate-bounce"}`}>Offer<MdOutlineLocalOffer className='absolute top-0 -right-4'/></Link>
          </div>
        </div>

        <div className={`sm:hidden z-40 fixed sm:relative w-[60%] min-h-[90vh] space-y-3 opacity-95 bg-blue-500 sm:bg-inherit duration-500  ${menuOpen ? 'block left-0 top-[63px]' : 'top-[63px] -left-[100%]'} `}>
          <div className="font-bold text-[19px] text-white flex flex-col pl-5 space-y-5 py-3 sm:space-y-0 md:space-x-12">
            <Link href="/" className={`${router.pathname === "/" ? " underline underline-offset-4" :""}`}>
              Home
            </Link>
            <Link href="/about" className={`${router.pathname === "/about" ? " underline underline-offset-4" :""}`}>
             About
            </Link>
            <Link href="/contact" className={`${router.pathname === "/contact" ? " underline underline-offset-4" :""}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
