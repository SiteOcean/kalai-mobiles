import ImageCarousel from '@/components/imageCarousel';
import DescriptionReadmore from '@/components/readMoreComp';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

import { MdOutlineArrowBack } from "react-icons/md";

export default function ViewProducts (){

    const router = useRouter(null)
    const productId = router.query.id;
    const [pro, setPro]= useState(null)

    const redirectToWhatsApp = async() => {
      // if (!phoneNumber) {
      //   return;
      // }
  
      const message = pro && pro.title
        ? `I'm Intrested in This : "${pro.title}"`
        : `Hi, ${pro.title}`;
  
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${123456}?text=${encodedMessage}`;
  
      try {
        window.open(whatsappUrl, '_blank');
      } catch (error) {
        
      }
    };

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
           {pro &&  <div className='flex flex-col-reverse sm:flex-row p-3 sm:p-5 md:pt-5 capitalize'>
      <div className='flex-1 sm:gap-y-2 pl-3 pt-2 space-y-1 flex md:justify-center flex-col border-x border-b sm:border-none'>
      <h1 className='font-bold text-blue-500 text-xl'>{pro.title}</h1>
      <p ><span className='font-bold'>Category:</span> {pro.category}</p>
      {/* <p><span className='font-bold'>Description: </span>{pro.description}</p> */}
      <DescriptionReadmore description={pro.description}/>
      <p><span className='font-bold'>Discount: </span>{pro.discountPercentage}%</p>
      <p><span className='font-bold'>Price: $</span>{pro.price}</p>
      {/* <p><span className='font-bold'>Rating:</span> {pro.rating}</p> */}
      <p><span className='font-bold'>Stock: </span>{pro.stock}</p>
      
      <div className='flex justify-between sm:justify-start gap-6 mt-5'>
      <a href="tel:+123456789" className="bg-[#41d7eb]   w-[60px] p-2 rounded-md flex justify-center items-center"><MdCall className='text-white font-bold text-[25px] text-center self-center'/></a>
      <button onClick={redirectToWhatsApp} className=' bg-[#4cf34c]   w-[60px] p-2 rounded-md flex justify-center items-center'><FaWhatsapp className='text-white font-bold text-[25px] text-center self-center'/></button>
      </div>
      </div>
      <div className='h-[250px] flex-1'>
        <ImageCarousel imgData={pro.images}/>
      {/* <img className='h-full rounded-t-md sm:rounded-md' src={pro.thumbnail} alt={"img"} /> */}
      </div>
        </div>}
          </div>
    )
}