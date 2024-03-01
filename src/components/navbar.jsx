import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5582ff] p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">
           Kalai Mobiles
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`lg:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="text-white lg:flex items-center space-x-12">
            <Link href="/">
              Home
            </Link>
            <Link href="/about">
             About
            </Link>
            <Link href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
