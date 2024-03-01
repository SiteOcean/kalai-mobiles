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
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{val.name}</div>
        <p>{val.brand}</p>
        <p className="text-gray-700 text-base">{val.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {val.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          ${val.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
