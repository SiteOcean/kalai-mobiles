// components/Footer.js

import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const router = useRouter(null)
  return (
    <footer className="bg-blue-500 text-white py-8 ">
      <div className="container mx-auto flex flex-col-reverse gap-y-3 sm:flex-row px-3 sm:justify-between sm:items-center">
        <div className="mb-4">
          <p className="text-lg font-bold">Sulur Service Center</p>
          <p onDoubleClick={()=>router.push('/admin/login')}>&copy; {new Date().getFullYear()}</p>
        </div>

        <div>
        <h1 className='font-bold'>Branches:</h1>
        <div className='flex gap-x-6 justify-center items-center font-mono sm:mt-0 text-[14px] sm:text-[15px]'>
          {/* <h1>Branchs</h1> */}
          <div className='flex flex-col'>
             <span className='font-semibold font-serif underline'> Kalai Mobiles</span>
              <span>Kannampalayam</span>
          </div>
          <div className='flex flex-col'>
          <span className='font-semibold font-serif underline'> Kalai Mobiles</span>
              <span>Ravathur-Pirivu</span>
          </div>
          <div className='flex flex-col'>
              <span className='font-semibold font-serif underline'>Sulur Service Center</span>
              <span>Sulur</span>
          </div>
        </div></div>

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
