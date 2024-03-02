// components/ProductCard.js

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const ProductCard = ({ val }) => {
  
    const navigator = useRouter(null)

    const navigateToViewPage=()=>{
        navigator.push('/viewProducts?id='+val.id)
    }

  return (
    <div onClick={navigateToViewPage} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img width={100} height={100} src={val.thumbnail} alt={"image"} className="w-full h-48 object-cover bg-cover" />
      <div className="p-2">
        <div className="font-bold text-md sm:text-xl mb-2">{val.name}</div>
        <p>{val.brand}</p>
        <p className="text-gray-700 text-sm sm:text-md">{val.description.slice(0, 30)}</p>
        <span className=" hidden md:block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {val.category}
        </span>
        <span className="inline-block bg-gray-100 rounded-md px-3 py-1 text-sm font-semibold text-gray-700">
          {val.price}<span className='text-[10px] text-gray-400 ml-1'>Rs</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
