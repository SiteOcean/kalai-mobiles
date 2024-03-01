import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function ViewProducts (){

    const router = useRouter(null)
    const { id } = router.query;
    const [pro, setPro]= useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            try {
              const response = await fetch('https://dummyjson.com/products/'+id);
              const json = await response.json();
              setPro(json);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        fetchData();
    },[]);

    console.log(pro)
    return(
        <div>
            {id}
           {pro &&  <div className='flex'>
      <div className='flex-1 flex justify-center pl-12 flex-col'>
      <h1>{pro.title}</h1>
      <p>Category: {pro.category}</p>
      <p>Description: {pro.description}</p>
      <p>Discount Percentage: {pro.discountPercentage}%</p>
      <p>ID: {pro.id}</p>
      <p>Price: ${pro.price}</p>
      <p>Rating: {pro.rating}</p>
      <p>Stock: {pro.stock}</p>
      </div>
      <img className='flex-1' src={pro.thumbnail} alt={"img"} />

     
    </div>}
        </div>

    )

}