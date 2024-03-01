import React, { useEffect, useState } from 'react';
import BannerSection from './banner';
import CategoryList from './categoryList';

import ProductCard from './productsCard';
let products = null;
let catName = 'all';
export default function MainHomeComp (){

    const categories = ['Nokia', 'Samsung', 'Apple', 'Sony'];
    const [pro, setPro]= useState(null)
    
  

    const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          const json = await response.json();
          setPro(json.products);
          products = json.products;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(()=>{
       
        fetchData();
    },[]);

    const SelectBrand=(cat)=>{
        catName = cat;
        if(cat === "all"){
            fetchData() 
        }
            setPro(
                products.filter((val,i)=>{
                    return cat === val.brand
                })
            )

    }

    useEffect(()=>{
        setPro(products)
    },[products])

    return(
        <div> 
            <BannerSection/>

            <div className='flex gap-x-3 overflow-auto w-full justify-center p-2 items-center'>
            <ul className='flex gap-x-6 w-[82%] mx-auto overflow-auto'>
            <li onClick={() => SelectBrand("all")} className={`list-none block w-[500px] ${catName === "all" && "bg-red-300"}`}>
                        All
                    </li>
                {products && products.length > 0 && (
                    products
                    .filter((cat, index, self) => self.findIndex((c) => c.brand === cat.brand) === index)
                    .map((uniqueCat, i) => (
                        <CategoryList key={i} catName={catName} cat={uniqueCat.brand} SelectBrand={SelectBrand}/>
                    ))
                )
                }
                </ul>

            
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5'>
                {pro && pro.length > 0 ? pro.map((val,i)=>{
                    return <ProductCard val={val}/>
                }) : <div>Loading...</div>}
            </div>

        </div>
    )
}