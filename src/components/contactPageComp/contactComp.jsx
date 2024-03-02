// pages/contact.js

import React from 'react';

const ContactComp = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have questions or feedback? We'd love to hear from you! Get in touch with us through the following contact options:
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Email</h2>
        <p className="text-gray-700">
          Send us an email at <a href="mailto:info@example.com" className="text-blue-500 hover:underline">deepan@gmail.com</a>.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Phone</h2>
        <p className="text-gray-700">
          Reach us by phone at <a href="tel:+123456789" className="text-blue-500 hover:underline">+1 (234) 567-89</a>.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-2">Visit Us</h2>
        <p className="text-gray-700 capitalize">
          trichy road, Near Kalaimagal book stall, sulur,coimbatore, tamil nadu, 641-402.
        </p>
      </section>
    </div>
  );
};

export default ContactComp;
