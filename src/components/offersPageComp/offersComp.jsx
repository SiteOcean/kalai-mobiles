import React, { useEffect, useState } from 'react';
import CustomLoader from '../loader';
import { useSiteDataContext } from '@/store/storeProvider';
import { fetchAllOffers } from '@/pages/api/service';
import BufferedImage from '../bufferImage';
import { useRouter } from 'next/router';

export default function OffersComp (){


    const {offerItems, setOfferItems} = useSiteDataContext();
    const navigator = useRouter(null)

    const navigateToViewPage=(itemId)=>{
        navigator.push('/viewOffer?id='+itemId)
    }
    const fetchData = async () => {
        try {
         
          const response = await fetchAllOffers("getAllOffers");
          setOfferItems(response);          
           
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(()=>{
       
        fetchData();
    },[]);


    let offer = "today's offer"
    return(
        <div className=''>
            <h1 className='text-[#6eeb75] text-[30px] py-3 text-center animate-pulse capitalize'>{offer}</h1>
            {offerItems ?<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-3 p-3 sm:gap-5 sm:p-5'>
           { offerItems.map((val,i)=>{

                return (
                    <div onClick={()=>navigateToViewPage(val._id)} className="max-w-sm relative rounded-sm overflow-hidden shadow-lg bg-white">
                    <BufferedImage imageBuffer={val.images[0]} alt="Buffered Image" className="w-full h-[150px] rounded-sm sm:h-[170px] object-fill" />
              
                    <div className="p-2">
                     
                      <div className="font-bold text-md sm:text-xl ">{val.brand}</div>
                      <p>{val.title}</p>
                      <p>{val.whatSpecial}</p>
                      <p className="text-gray-400 text-sm sm:text-md ">{val.description.slice(0, 30)}</p>
                     
                      <span className="block text-center mt-2 bg-gray-100 rounded-md p-2 py-1 text-sm font-semibold text-gray-700">
                      <span className='text-[10px] text-gray-400 ml-1 '>Rs</span> {val.price}
                      </span>
                    </div>
                    <span className='absolute top-0 right-0 font-semibold text-gray-500 bg-[yellow] p-2 rounded-sm'>{val.offer}%</span>
                  </div>
                )
                }) }
           </div>: <div className='h-[50vh] flex justify-center items-center w-full'><CustomLoader/></div>}
        </div>
    )
}