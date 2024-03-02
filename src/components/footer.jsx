// components/Footer.js

import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter(null)
  return (
    <footer className="bg-blue-500 text-white py-8 ">
      <div className="container mx-auto flex flex-col-reverse gap-y-1 sm:flex-row px-3 sm:justify-between sm:items-center">
        <div className="mb-4">
          <p className="text-lg font-bold">Sulur Service Center</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="flex space-x-4">
         <p>Twitter</p>
         <p>Insta</p>
         <p>Facebook</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
