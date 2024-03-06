// components/ProductCard.js

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import BufferedImage from '../bufferImage';

const ProductCard = ({ val }) => {
  
    const navigator = useRouter(null)

    const navigateToViewPage=()=>{
        navigator.push('/viewProducts?id='+val._id)
    }

  return (
    <div onClick={navigateToViewPage} className="max-w-sm relative rounded-sm overflow-hidden shadow-lg bg-white">
      <BufferedImage imageBuffer={val.images[0]} alt="Buffered Image" className="w-full h-[150px] rounded-sm sm:h-[170px] object-fill" />

      <div className="p-2">
       
        <div className="font-bold text-md sm:text-xl ">{val.brand}</div>
        <p>{val.title}</p>
        <p className="text-gray-400 text-sm sm:text-md ">{val.description.slice(0, 30)}</p>
       
        <span className="block text-center mt-2 bg-gray-100 rounded-md p-2 py-1 text-sm font-semibold text-gray-700">
        <span className='text-[10px] text-gray-400 ml-1 '>Rs</span> {val.price}
        </span>
      </div>
      <span className='absolute top-0 right-0 font-semibold text-gray-500 bg-[yellow] p-2 rounded-sm'>{val.offer}%</span>
    </div>
  );
};

export default ProductCard;
