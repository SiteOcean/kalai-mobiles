// pages/service.js

import NavFooter from '@/components/navFooter/navFooter';
import React, { useRef } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';

const ServicePage = () => {
  const serviceCategories = [
    'Screen Replacement',
    'Charger Port Repair',
    'Water Damage Repair',
    'Battery Replacement',
    'Camera Repair',
    'Software Troubleshooting',
    'Data Recovery',
    'Speaker and Microphone Repair',
    'Button Replacement (Power, Volume)',
    'Network Issues',
    'Device Unlocking',
    'Virus and Malware Removal',
    'Screen Protector Installation',
    'Headphone Jack Repair',
    'Bluetooth Connectivity Issues',
    'Performance Optimization',
    'Home Button Repair',
    'Firmware Updates',
    'Sensor Calibration',
    'Motherboard Repair',
    'Sim Card Issues',
    'Custom Phone Modifications',
    'Device Cleaning and Maintenance',
    'Accessories Setup and Configuration',
  ];
  const accessoriesCategories = [
    'Phone Cases',
    'Screen Protectors',
    'Chargers and Cables',
    'Power Banks',
    'Headphones and Earphones',
    'Bluetooth Speakers',
    'Phone Stands and Holders',
    'Car Mounts',
    'Selfie Sticks',
    'PopSockets and Phone Grips',
    'Mobile Wallets and Card Holders',
    'Wireless Chargers',
    'Phone Lenses and Camera Accessories',
    'Mobile Gaming Accessories',
    'Fitness Bands and Smartwatches',
    'AR and VR Accessories',
    'Mobile Signal Boosters',
    'Cleaning Kits',
    'Phone Skins and Decals',
    'Replacement Batteries',
    'Storage and Memory Cards',
    'Travel and Carrying Cases',
    'Adapters and Converters',
    'Docking Stations',
  ];
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
      <div className='sm:flex '>
      <div className='sm:flex-1'>
      <h2 className="text-2xl font-bold mb-4">Mobile Service Categories</h2>
      <ul className="list-disc ml-6">
        {serviceCategories.map((category, index) => (
          <li key={index} className="mb-2">
            {category}
          </li>
        ))}
      </ul>
    </div>
    <div className='sm:flex-1'>
      <h2 className="text-2xl font-bold mb-4">Mobile Accessories Categories</h2>
      <ul className="list-disc ml-6">
        {accessoriesCategories.map((category, index) => (
          <li key={index} className="mb-2">
            {category}
          </li>
        ))}
      </ul>
    </div>
      </div>
     </div>
     </NavFooter>
  
  );
};

export default ServicePage;
