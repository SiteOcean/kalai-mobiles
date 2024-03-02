// pages/about.js

import React from 'react';

const AboutComp= () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our mobile shop, where we offer a wide range of mobile phones, accessories, and top-notch services to enhance your mobile experience.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Mobile Phones</h2>
        <p className="text-gray-700">
          Explore the latest and greatest mobile phones from leading brands. From sleek designs to powerful features, we have the perfect device for everyone.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Accessories</h2>
        <p className="text-gray-700">
          Elevate your mobile experience with our extensive collection of accessories. From stylish phone cases to high-quality headphones, we have it all.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Mobile Services</h2>
        <p className="text-gray-700">
          In addition to providing top-tier products, we also offer reliable mobile services. Whether you need repairs, upgrades, or personalized assistance, our skilled technicians are here to help.
        </p>
      </section>
    </div>
  );
};

export default AboutComp;
