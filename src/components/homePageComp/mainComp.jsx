import React, { useEffect, useState } from 'react';
import BannerSection from './banner';
import CategoryList from './categoryList';

import ProductCard from './productsCard';
import { useSiteDataContext } from '@/store/storeProvider';
let products = null;
let catName = 'all';
export default function MainHomeComp (){

    const categories = ['Nokia', 'Samsung', 'Apple', 'Sony'];

    const {hompageProducts, setHomePageProducts} = useSiteDataContext();
  

    const fetchData = async () => {
        try {
          const response = await fetch('https://dummyjson.com/products');
          const json = await response.json();
          setHomePageProducts(json.products);
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
        setHomePageProducts(
                products.filter((val,i)=>{
                    return cat === val.brand
                })
            )

    }

    useEffect(()=>{
        setHomePageProducts(products)
    },[products])

    return(
        <div> 
            <BannerSection/>
            <h1 className='text-center font-bold text-[28px] text-gray-500 py-2'>Select Category</h1>
            <div className='flex gap-x-3 overflow-auto w-full justify-center p-2 items-center'>

           
            <ul className='flex gap-x-9 w-[82%] mx-auto overflow-auto'>
            <li onClick={() => SelectBrand("all")} className={`list-none font-bold block w-[500px] ${catName == 'all' ? 'text-blue-500' : "text-gray-600"}`}>
                        All
                    </li>
                {products && products.length > 0 && (
                    products
                    .filter((cat, index, self) => self.findIndex((c) => c.brand === cat.brand) === index)
                    .map((uniqueCat, i) => (
                        <CategoryList key={i} catName={catName} cat={uniqueCat.brand} SelectBrand={SelectBrand}/>
                    ))
                )}
                </ul>

            
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5'>
                {hompageProducts && hompageProducts.length > 0 ? hompageProducts.map((val,i)=>{
                    return <ProductCard val={val}/>
                }) : <div>Loading...</div>}
            </div>

        </div>
    )
}