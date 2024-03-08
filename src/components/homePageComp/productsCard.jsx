// components/ProductCard.js

import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import BufferedImage from '../bufferImage';
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductCard = ({ val }) => {
  
    const navigator = useRouter(null)

    const navigateToViewPage=()=>{
        navigator.push('/viewProducts?id='+val._id)
    }

  return (
    <div onClick={navigateToViewPage} className=" bg-white shadow-slate-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
            <BufferedImage imageBuffer={val.images[0]} alt="Buffered Image" className="w-full h-[150px]  rounded-t-xl sm:h-[170px] object-fill" />
    <div className="p-3 sm:p-6">
      <h2 className="text-xl font-semibold mb-1">{val.title}</h2>
      <p className="text-gray-700 mb-1">{val.description.slice(0,30)}</p>
      <div className="flex justify-between items-center">
        <span className="bg-gray-200 rounded-full px-1 sm:px-3 py-1 text-sm font-semibold text-gray-700">
          Offer: {val.offer}%
        </span>
        <span className="text-md sm:text-lg font-bold text-gray-800 flex items-center">{val.price}<MdOutlineCurrencyRupee/></span>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
