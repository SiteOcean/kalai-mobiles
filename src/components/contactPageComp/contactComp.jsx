// pages/contact.js
import { MdLocationOn } from "react-icons/md";

import React from 'react';

const ContactComp = () => {

  const handleLocation=() => {
    // Replace with your desired latitude and longitude
    const lat = '11.025304819016323';
    const lng = '77.12165293830378';

    // Redirect to Google Maps with the specified lat/lng
    window.location.href = `https://www.google.com/maps?q=${lat},${lng}`;
  }


  return (
    <div>
       <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between sm:p-4 md:p-8">
      {/* Left side (Image) */}
      {/* <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-gray-200 col-span-2 p-4">
        <img src={'sulur-service-center.jpeg'} alt="Left side" className="w-full h-[150px]" />
        </div>
        <div className="bg-gray-200 row-span-2 p-4">
        <img src={'sulur-service-center.jpeg'} alt="Left side" className="w-full h-[150px]" />

        </div>
        <div className="bg-gray-200 row-span-1 p-4">Item 3</div>
        <div className="bg-gray-200 row-span-2 p-4">Item 4</div>
        <div className="bg-gray-200 col-span-1 p-4">Item 4</div>
        <div className="bg-gray-200  p-4">Item 4</div>
      </div>
    </div> */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0 p-3 sm:p-6 rounded-md shadow-md">
        <img src={'sulur-service-center.jpeg'} alt="Left side" className="w-full h-[350px] " />
      </div>

      {/* Right side (Heading and Paragraph) */}
      <div className="w-full md:w-1/2 md:ml-4">
      <h1 className="text-3xl text-blue-400 font-bold mb-2 sm:mb-4 underline underline-offset-4">Contact Us:</h1>
      
      <section className="mb-3 md:mb-6">
        <h2 className="text-2xl font-bold mb-1 sm:mb-2">Email</h2>
        <p className="text-gray-700">
          Send us an email at <a href="mailto:info@example.com" className="text-blue-500 hover:underline">deepan@gmail.com</a>.
        </p>
      </section>
      <section className="mb-3 md:mb-6">
        <h2 className="text-2xl font-bold mb-1 sm:mb-2">Phone</h2>
        <p className="text-gray-700">
          Reach us by phone at <a href="tel:+918148140754" className="text-blue-500 font-bold hover:underline">+91-8148140754</a>.
        </p>
      </section>
     
      <section>
        <h2 className="text-2xl font-bold mb-1 sm:mb-2">Visit Us</h2>
        <p onClick={handleLocation} className="text-blue-700 underline capitalize cursor-pointer ">
         <span className="flex gap-x-1 items-center"><MdLocationOn/> trichy road,</span> Near Kalaimagal book stall,<br></br> sulur,coimbatore, tamil nadu, 641-402.
        </p>
      </section>
      </div>
    </div>
      
    </div>
  );
};

export default ContactComp;
