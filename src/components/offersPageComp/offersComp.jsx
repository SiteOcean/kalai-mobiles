import React, { useEffect, useState } from 'react';

export default function OffersComp (){

    const [offerItems, setOfferItems] = useState(null)

    useEffect(()=>{
        fetch('https://dummyjson.com/carts')
      .then(response => response.json())
      .then(json => setOfferItems(json.carts))
    },[])
    return(
        <div className=''>
            <h1 className='text-[#575755] text-[32px] py-3 text-center animate-pulse'>Offer Zone</h1>
           <div className='grid p-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 '>
           {offerItems && offerItems[0].products.map((val,i)=>{

                return (
                    <div className='relative'>
                        <img className='h-[160px] w-full' src={val.thumbnail} alt="" />
                        <h1>{val.title}</h1>

                    <p>Price: {val.price}</p>
                    <span className='bg-[yellow] text-white font-bold p-1 rounded-full absolute top-0 right-0'>{val.discountPercentage}%</span>
                    </div>
                )
                })}
           </div>
        </div>
    )
}