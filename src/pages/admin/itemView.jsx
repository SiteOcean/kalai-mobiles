import BufferedImage from '@/components/bufferImage';
import ImageSlider from '@/components/imageCarousel';
import DescriptionReadmore from '@/components/readMoreComp';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
import { MdOutlineArrowBack } from "react-icons/md";
import CustomLoader from '@/components/loader';
import { fetchParticularProduct } from '../api/service';

import EditProductComp from '@/components/editProductComp';
let editItemData;


export default function ItemView (){

    const router = useRouter(null)
    const productId = router.query.id;
    const [pro, setPro]= useState(null)
    const [editState, setEditState] = useState(false)

    const redirectToWhatsApp = async() => {
    
      const message = pro && pro.title
        ? `I'm Intrested in This : "${pro.name} ${pro.title}"`
        : `Hi, }`;
  
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${+918148140754}?text=${encodedMessage}`;
  
      try {
        window.open(whatsappUrl, '_blank');
      } catch (error) {    
      }
    };

  
      const handleEdit=()=>{
        editItemData=pro;
        setEditState(true)
      }

      const fetchData = async () => {
        let res = await fetchParticularProduct(productId,"getProductById")
        if(res){
         setPro(res)
        }
         };

    useEffect(()=>{
        
        fetchData();
    },[productId]);

    const submitEdit=()=>{
        fetchData();
        editItemData=null;
        setEditState(false)
      }

    return(
        <div>
           {!editState ? <>
            <div className='bg-[#5582ff] flex justify-between items-center py-3 px-3 sm:px-12 gap-x-3 font-bold text-white'>
                
               <div className='flex items-center gap-x-2 text-[25px]'><MdOutlineArrowBack className='cursor-pointer' onClick={()=>router.back()}/> Sulur Service Center</div>
                <button className='border px-2 py-1 rounded-md text-[19px] bg-[#3ce73c] hover:bg-[#62f162]' onClick={handleEdit}>Edit</button></div>
           {pro ?  <div className='flex flex-col-reverse sm:flex-row p-3 sm:p-5 md:pt-5 capitalize'>
      <div className='flex-1 mt-2 sm:mt-0 sm:gap-y-2 pl-3 pt-2 space-y-1 flex md:justify-center flex-col'>
      <h1 className='font-bold text-blue-500 text-xl'>{pro.name}</h1>
      <p ><span className='font-bold'>Category:</span> {pro.title}</p>
      <p><span className='font-bold'>Description: </span>{pro.description}</p>
      <DescriptionReadmore description={pro.description}/>
      <p><span className='font-bold'>Discount: </span>{pro.offer}%</p>
      <p><span className='font-bold'>Price: $</span>{pro.price}</p>
   
      <div className='flex justify-between sm:justify-start gap-6 mt-9'>
    
      <button onClick={redirectToWhatsApp} className=' bg-[#64c1ff] hover:bg-[#7bb6dd] text-white p-2 rounded-md flex justify-center items-center'>Enquire</button>
      </div>
      </div>
      <div className='flex-1'>
       <ImageSlider images={pro.images}/>
       
      </div>
        </div> : <div className='h-[80vh] flex justify-center items-center'><CustomLoader/></div>}
        </>:  <div className='absolute p-3 top-0 right-0 left-0 min-h-[80vh] bg-gray-300 opacity-95'>
             <EditProductComp itemPath={'updateProductById'} submitEdit={submitEdit} item={editItemData}/> 
            </div>}
          </div>
    )
}