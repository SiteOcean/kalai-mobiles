import BufferedImage from '@/components/bufferImage';
import ImageSlider from '@/components/imageCarousel';
import DescriptionReadmore from '@/components/readMoreComp';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_BACKEND_URI
import { MdOutlineArrowBack } from "react-icons/md";
import { fetchParticularProduct } from './api/service';

export default function ViewProducts (){

    const router = useRouter(null)
    const productId = router.query.id;
    const [pro, setPro]= useState(null)

    const redirectToWhatsApp = async() => {
    
      const message = pro && pro.title
        ? `I'm Intrested in This : "${pro.title}"`
        : `Hi, ${pro.title}`;
  
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${+918148140754}?text=${encodedMessage}`;
  
      try {
        window.open(whatsappUrl, '_blank');
      } catch (error) {
        
      }
    };

    useEffect(()=>{
        const fetchData = async () => {
         let res = await fetchParticularProduct(productId)
         if(res){
          setPro(res)
         }
          };
        fetchData();
    },[productId]);

    return(
        <div>
            <div className='bg-[#5582ff] flex items-center py-3 px-3 sm:px-12 gap-x-3 font-bold text-white text-[25px]'>
                
               <MdOutlineArrowBack className='cursor-pointer' onClick={()=>router.back()}/> Sulur Service Center</div>
           {pro &&  <div className='flex flex-col-reverse sm:flex-row p-3 sm:p-5 md:pt-5 capitalize'>
      <div className='flex-1 mt-2 sm:mt-0 sm:gap-y-2 pl-3 pt-2 space-y-1 flex md:justify-center flex-col'>
      <h1 className='font-bold text-blue-500 text-xl'>{pro.title}</h1>
      <p ><span className='font-bold'>Category:</span> {pro.category}</p>
      {/* <p><span className='font-bold'>Description: </span>{pro.description}</p> */}
      <DescriptionReadmore description={pro.description}/>
      <p><span className='font-bold'>Discount: </span>{pro.discountPercentage}%</p>
      <p><span className='font-bold'>Price: $</span>{pro.price}</p>
      {/* <p><span className='font-bold'>Rating:</span> {pro.rating}</p> */}
      <p><span className='font-bold'>Stock: </span>{pro.stock}</p>
      
      <div className='flex justify-between sm:justify-start gap-6 mt-9'>
      <a href="tel:+123456789" className="bg-[#41d7eb]   w-[60px] p-2 rounded-md flex justify-center items-center"><MdCall className='text-white font-bold text-[25px] text-center self-center'/></a>
      <button onClick={redirectToWhatsApp} className=' bg-[#4cf34c]   w-[60px] p-2 rounded-md flex justify-center items-center'><FaWhatsapp className='text-white font-bold text-[25px] text-center self-center'/></button>
      </div>
      </div>
      <div className='flex-1'>
       <ImageSlider images={pro.images}/>
       
      </div>
        </div>}
          </div>
    )
}