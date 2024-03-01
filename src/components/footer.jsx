// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-8 ">
      <div className="container mx-auto flex  justify-between items-center">
        <div className="mb-4">
          <p className="text-lg font-bold">Your Website Name</p>
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
