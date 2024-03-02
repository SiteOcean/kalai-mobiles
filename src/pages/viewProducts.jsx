import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";

import { MdOutlineArrowBack } from "react-icons/md";

export default function ViewProducts (){

    const router = useRouter(null)
    const productId = router.query.id;
    const [pro, setPro]= useState(null)

    useEffect(()=>{
        const fetchData = async () => {
          if(!productId)return;
            try {
              const response = await fetch('https://dummyjson.com/products/'+productId);
              const json = await response.json();
              setPro(json);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        fetchData();
    },[productId]);
    
    return(
        <div>
            <div className='bg-[#5582ff] flex items-center py-3 px-3 sm:px-12 gap-x-3 font-bold text-white text-[25px]'>
                
               <MdOutlineArrowBack className='cursor-pointer' onClick={()=>router.back()}/> Sulur Service Center</div>
           {pro &&  <div className='flex flex-col-reverse sm:flex-row p-3 md:pt-5'>
      <div className='flex-1 sm:gap-y-2 flex md:justify-center p-5 md:pl-12 flex-col border-x border-b sm:border-none'>
      <h1 className='font-bold'>{pro.title}</h1>
      <p ><span className='font-bold'>Category:</span> {pro.category}</p>
      <p><span className='font-bold'>Description: </span>{pro.description}</p>
      <p><span className='font-bold'>Discount Percentage: </span>{pro.discountPercentage}%</p>
      <p><span className='font-bold'>ID:</span> {pro.id}</p>
      <p><span className='font-bold'>Price: $</span>{pro.price}</p>
      <p><span className='font-bold'>Rating:</span> {pro.rating}</p>
      <p><span className='font-bold'>Stock: </span>{pro.stock}</p>
      <button className='bg-[green] w-[60px] p-2 rounded-sm flex justify-center items-center'><FaWhatsapp className='text-white font-bold text-[25px] text-center self-center'/></button>
      </div>
      <img className='flex-1 rounded-t-md sm:rounded-md' src={pro.thumbnail} alt={"img"} />
        </div>}
          </div>
    )
}