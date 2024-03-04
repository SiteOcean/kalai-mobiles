import React, { useEffect, useRef, useState } from 'react';
import BannerSection from './banner';
import CategoryList from './categoryList';

import { FaSearch, FaWhatsapp } from "react-icons/fa";
import ProductCard from './productsCard';
import { useSiteDataContext } from '@/store/storeProvider';
import CustomLoader from '../loader';
import { fetchAllProducts, fetchAllProductsByCategory } from '@/pages/api/service';
import { categoryDataList } from '@/pages/api/config';
let products = null;
let catName = 'all';

export default function MainHomeComp (){

    const {hompageProducts, setHomePageProducts} = useSiteDataContext();
    const [dropDownList, setDropDownList] = useState(null);
    const inputRef = useRef(null);
    const [placeHolder, setPlaceHolder] = useState('')
    const [isVisible, setIsVisible] = useState(true);

    const fetchData = async () => {
        try {
          const response = await fetchAllProducts();
          setHomePageProducts(response);
          products = response;
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

    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 500); // Set the duration in milliseconds (0.5 seconds)
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);

    const SearchFilter = (value) => {
        setPlaceHolder(value)
        if(value === "" || !products || products.length < 1){
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
    
    const fetchDataByCategory = async (category) => {
        try {
            catName=category
            setHomePageProducts(null)
            products = null;
          const response = await fetchAllProductsByCategory(category);
          setHomePageProducts(response);
          products = response;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect(()=>{
        setHomePageProducts(products)
    },[products])

    const redirectToWhatsApp = async() => {
       
        const encodedMessage = encodeURIComponent("Hi, Sulur Service Center. ");
        const whatsappUrl = `https://wa.me/${+918148140754}?text=${encodedMessage}`;
    
        try {
          window.open(whatsappUrl, '_blank');
        } catch (error) {
          
        }
      };

    return(
        <div className='relative w-full'> 
            {/* <BannerSection/> */}
          {isVisible ? <div className="splash-screen">
        {/* Your splash screen content goes here */}
        <h1>Welcome to My Website!</h1>
      </div> :<> 
            <button onClick={redirectToWhatsApp} className=' bg-[#42fd42] fixed bottom-2 sm:bottom-4 animate-bounce right-5 sm:right-4  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] p-2 rounded-full flex justify-center items-center'><FaWhatsapp className='text-white font-bold text-[32px] sm:text-[35px] text-center self-center'/></button>


            <div className="flex flex-1 mt-3 relative w-[95%] sm:w-[30%] mx-auto pb-3">
              <input ref={inputRef} id={"searchbar"} type="text" value={placeHolder} placeholder={"Search"}
                className="py-2 px-1 sm:py-1.5 bg-white sm:p-2 pl-3 text-[15px] sm:pl-3 border-y-2 border-l-2 border-blue-200 outline-none  rounded-bl-full rounded-tl-full w-full" onChange={(e)=>SearchFilter(e.target.value)}/>
                <button type="submit" className="text-[white]  bg-blue-500   duration-500 w-[90px] sm:w-[100px] font-semibold text-center rounded-br-full rounded-tr-full rounde sm:hover:bg-[#9393ff]"><span  className="hidden sm:block">Search</span><FaSearch  className="sm:hidden mx-auto"/></button>
                {dropDownList && dropDownList.length > 0 ?<ul className={`absolute h-[300px]
                 -bottom-[300px] overflow-y-auto z-50 left-0 right-0`}>
                  {dropDownList.map((val, index)=>{
                    return <li key={index+"fil"} onClick={()=>SelectBrand(val)} className="text-[#242323] text-[19px] font-bold bg-white p-3 capitalize hover:text-[#838383] cursor-pointer border-b border-[#e7e7e7]">{val}</li>
                  }) }
                </ul>: null}
                </div>
            
            {/* <h1 className='text-center font-bold text-[28px] text-gray-500 py-2'>Select Category</h1> */}
            <div className='flex gap-x-3 overflow-auto w-full justify-center items-center'>

           
             <ul className='flex gap-x-9 z-0 w-[92%] sm:w-[82%] mx-auto overflow-auto'>
                <>
                <li onClick={() => SelectBrand("all")} className={`capitalize list-none block cursor-pointer font-bold ${catName == 'all' ? 'text-blue-500' : "text-gray-600"}`}>
                        All
                    </li>
                {categoryDataList.map((val,i)=>{
                    return (<li key={i} onClick={() => fetchDataByCategory(val)} className={`capitalize list-none block cursor-pointer font-bold ${catName == val ? 'text-blue-500' : "text-gray-600"}`}>
                    {val}
                </li>)
                })}
            
                
            { products && products.length > 0 && products.filter((cat, index, self) => self.findIndex((c) => c.brand === cat.brand) === index)
                    .map((uniqueCat, i) => (
                        <CategoryList key={i} catName={catName} cat={uniqueCat.brand} SelectBrand={SelectBrand}/>
                    ))
                }</>
                </ul>     
            </div>

           <div className='w-full'>
           {hompageProducts || hompageProducts !== null ? <>{ hompageProducts.length > 0 ?<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-3 p-3 sm:gap-5 sm:p-5'>
                 {hompageProducts.map((val,i)=>{
                    return <ProductCard key={i} val={val}/>
                })} 
            </div>:
             <div className='min-h-[50vh] grid items-center justify-center'>No Data...</div>}</>
             
             : <div className='w-full min-h-[60vh] flex flex-col items-center justify-center'>
              <div className='text-gray-500 animate-ping font-semibold'>Sulur Service Center</div> 
              <CustomLoader/></div>}
           </div>
                </>}
        </div>
    )
}