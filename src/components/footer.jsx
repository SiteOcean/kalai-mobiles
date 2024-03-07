// components/Footer.js

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const router = useRouter(null)
  const [storedValue, setStoredValue] = useState(null);

  const getValueFromLocalStorage = () => {
    const storedValue = localStorage.getItem('token');
    if (storedValue) {
        setStoredValue(storedValue)
    }
  };


  const loginCheck=()=>{
    if(storedValue){
      router.push('/admin/homepage')
    }
    else{
      router.push('/admin/login')
    }
  }
  useEffect(() => {
    getValueFromLocalStorage();
  }, []);
  return (
    <footer className="bg-blue-500 text-white py-8 ">
      <div className="container mx-auto flex flex-col-reverse gap-y-3 sm:flex-row px-3 sm:justify-between sm:items-center">
        <div className="mb-4">
          <p className="text-lg font-bold">Sulur Service Center</p>
          <p onDoubleClick={loginCheck}>&copy; {new Date().getFullYear()}</p>
        </div>

        <div>
        <h1 className='font-semibold text-gray-200'>Branches:</h1>
        <div className='flex gap-x-6 justify-center items-start font-mono mt- 2 sm:mt-0 text-[14px] sm:text-[15px]'>
          {/* <h1>Branchs</h1> */}
          <div className='flex flex-col'>
             <span className='font-semibold font-serif underline'> Kalai_Mobiles</span>
              <span>Kannampalayam</span>
          </div>
          <div className='flex flex-col'>
          <span className='font-semibold font-serif underline'> Kalai_Mobiles</span>
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
