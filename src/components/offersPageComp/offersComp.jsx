import React, { useEffect, useState } from 'react';
import CustomLoader from '../loader';

export default function OffersComp (){

    const [offerItems, setOfferItems] = useState(null)

    useEffect(()=>{
        fetch('https://dummyjson.com/carts')
      .then(response => response.json())
      .then(json => setOfferItems(json.carts))
    },[])
    let offer = "today's offer"
    return(
        <div className=''>
            <h1 className='text-[#6eeb75] text-[30px] py-3 text-center animate-pulse capitalize'>{offer}</h1>
            {offerItems ?<div className='grid p-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 '>
           { offerItems[0].products.map((val,i)=>{

                return (
                    <div className='relative'>
                        <img className='h-[160px] w-full' src={val.thumbnail} alt="" />
                        <h1>{val.title}</h1>

                    <p>Price: {val.price}</p>
                    <span className='bg-[yellow] text-white font-bold p-1 rounded-full absolute top-0 right-0'>{val.discountPercentage}%</span>
                    </div>
                )
                }) }
           </div>: <div className='h-[50vh] flex justify-center items-center w-full'><CustomLoader/></div>}
        </div>
    )
}