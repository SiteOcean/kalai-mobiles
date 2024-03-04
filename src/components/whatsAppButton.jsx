import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsappRedirect = ({  productName, productId, className }) => {

  const redirectToWhatsApp = async() => {
    if (!phoneNumber) {
      return;
    }

    const message = productName && productId
      ? `I'm Intrested in This : "${productName}"`
      : `Hi, ${productName}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${+918148140754}?text=${encodedMessage}`;

    try {
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      
    }
  };


  return (
    <button onClick={redirectToWhatsApp} className={className}>
      {productId && productName ? <span className='flex space-x-1 items-center'><BsWhatsapp className='text-[#48d848]' /><span>Chat</span></span> : <BsWhatsapp className='text-[#48d848]' />}
    </button>
  );
};

export default WhatsappRedirect;
