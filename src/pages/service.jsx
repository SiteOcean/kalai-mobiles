// pages/service.js

import NavFooter from '@/components/navFooter/navFooter';
import React, { useRef } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';

const ServicePage = () => {
  return (
        <NavFooter>
     <div className='container mx-auto p-4 sm:pt-3'>
     <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <p className="text-gray-700 mb-4">
        We take pride in offering first-class mobile services delivered by our professional team. With a strong commitment to excellence, we've garnered positive feedback from many satisfied customers.
      </p>
      <p className="text-gray-700 mb-4">
        At your convenience, we provide door-to-door services. Our executive will pick up your service order, and after the repair is fixed, our executive will deliver it back to you.
      </p>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Service Categories</h2>
        <ul className="list-disc pl-4 text-gray-700">
          <li>Screen Replacement</li>
          <li>Charger Port Repair</li>
          <li>Water Damage Repair</li>
        </ul>
      </div>
     </div>
     </NavFooter>
  
  );
};

export default ServicePage;
