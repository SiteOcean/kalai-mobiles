import React, { useEffect, useRef, useState } from 'react';
import BannerSection from './banner';
import CategoryList from './categoryList';

import { FaSearch } from "react-icons/fa";
import ProductCard from './productsCard';
import { useSiteDataContext } from '@/store/storeProvider';
let products = null;
let catName = 'all';
export default function MainHomeComp (){

    const categories = ['Nokia', 'Samsung', 'Apple', 'Sony'];

    const {hompageProducts, setHomePageProducts} = useSiteDataContext();
    const [dropDownList, setDropDownList] = useState(null)
    const inputRef = useRef(null);
    const [placeHolder, setPlaceHolder] = useState('')
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
        catName = cat.toLowerCase();
        if(cat === "all"){
            fetchData() 
        }
        setHomePageProducts(
                products.filter((val,i)=>{
                    return catName === val.brand.toLowerCase()
                })
            )
            setPlaceHolder(cat)
            setDropDownList(null)
            inputRef.current.blur();
    }

    const SearchFilter = (value) => {
        setPlaceHolder(value)
        if(value === ""){
            setDropDownList(null)
            return;
        }

        let temp = [...new Set(products.map(val => val.brand.toLowerCase()))];
        setDropDownList(
            temp.filter((val,i)=>{
                if(val.toLowerCase().startsWith(value.toLowerCase())){
                    return val
                }
            })
        );
    };


    useEffect(()=>{
        setHomePageProducts(products)
    },[products])

    return(
        <div className='bg-blur '> 
            {/* <BannerSection/> */}

            
            <div className="flex flex-1 mt-3 relative w-[82%] sm:w-[30%] mx-auto pb-3">
              <input ref={inputRef} id={"searchbar"} type="text" value={placeHolder} placeholder={"Search"}
                className="py-2 px-1 sm:py-1.5 bg-white sm:p-2 pl-3 text-[15px] sm:pl-3 border-y-2 border-l-2 border-blue-200 outline-none  rounded-bl-full rounded-tl-full w-full" onChange={(e)=>SearchFilter(e.target.value)}/>
                <button whileTap={{ scale: 1.1 }} type="submit" className="text-[white]  bg-blue-500   duration-500 w-[70px] sm:w-[100px] font-semibold text-center rounded-br-full rounded-tr-full rounde sm:hover:bg-[#acacac]"><span  className="hidden sm:block">Search</span><FaSearch  className="sm:hidden mx-auto"/></button>
                {dropDownList && dropDownList.length > 0 ?<ul className={`absolute h-[300px]
                 -bottom-[300px] overflow-y-auto z-50 left-0 right-0`}>
                  {dropDownList.map((val, index)=>{
                    return <li key={index+"fil"} onClick={()=>SelectBrand(val)} className="text-[#242323] text-[19px] font-bold bg-white p-3 capitalize hover:text-[#838383] cursor-pointer border-b border-[#e7e7e7]">{val}</li>
                  }) }
                </ul>: null}
                </div>
            
            {/* <h1 className='text-center font-bold text-[28px] text-gray-500 py-2'>Select Category</h1> */}
            <div className='flex gap-x-3 overflow-auto w-full justify-center items-center'>

           
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