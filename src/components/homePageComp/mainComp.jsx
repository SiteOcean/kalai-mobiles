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

    const {hompageProducts, setHomePageProducts,splashScreen,setSplashScreen
    } = useSiteDataContext();
    const [dropDownList, setDropDownList] = useState(null);
    const inputRef = useRef(null);
    const [placeHolder, setPlaceHolder] = useState('')

    const fetchData = async () => {
        try {
          if(!splashScreen){
            setTimeout(()=>{
              setSplashScreen(true);
            },5000)
          } 
          const response = await fetchAllProducts("getAllProducts");
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
          setHomePageProducts(null);
          products=null;
          fetchData();
          return;
        }
        setHomePageProducts(
                products.filter((val,i)=>{
                    return catName === val.brand.toLowerCase()
                })
            )
            setPlaceHolder(cat)
            setDropDownList(null)
            
    }

   

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
            setPlaceHolder('')
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
        <div className='relative w-full bg-blue-500'> 
            {/* <BannerSection/> */}
            {!splashScreen ? <div className="w-full flex justify-center items-center">     
            <BannerSection/>   
      </div> :<> 
            <button onClick={redirectToWhatsApp} className=' bg-[#42fd42] fixed bottom-2 sm:bottom-4 animate-bounce right-5 sm:right-4  w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] p-2 rounded-full flex justify-center items-center'><FaWhatsapp className='text-white font-bold text-[32px] sm:text-[35px] text-center self-center'/></button>


            {/* <div className="flex flex-1 mt-3 relative w-[95%] sm:w-[30%] mx-auto pb-3">
              <input ref={inputRef} id={"searchbar"} type="text" value={placeHolder} placeholder={"Search"}
                className="py-2 px-1 sm:py-1.5 bg-white sm:p-2 pl-3 text-[15px] sm:pl-3 border-y-2 border-l-2 border-blue-200 outline-none  rounded-bl-full rounded-tl-full w-full" onChange={(e)=>SearchFilter(e.target.value)}/>
                <button type="submit" className="text-[white]  bg-blue-500   duration-500 w-[90px] sm:w-[100px] font-semibold text-center rounded-br-full rounded-tr-full rounde sm:hover:bg-[#9393ff]"><span  className="hidden sm:block">Search</span><FaSearch  className="sm:hidden mx-auto"/></button>
                {dropDownList && dropDownList.length > 0 ?<ul className={`absolute h-[300px]
                 -bottom-[300px] overflow-y-auto z-50 left-0 right-0`}>
                  {dropDownList.map((val, index)=>{
                    return <li key={index+"fil"} onClick={()=>SelectBrand(val)} className="text-[#242323] text-[19px] font-bold bg-white p-3 capitalize hover:text-[#838383] cursor-pointer border-b border-[#e7e7e7]">{val}</li>
                  }) }
                </ul>: null}
                </div> */}
            
            {/* <h1 className='text-center font-bold text-[28px] text-white py-2'>Select Category</h1> */}
            <div className='flex gap-x-3 sticky top-[58px] sm:top-[65px] md:top-[65px] lg:top-[65px] bg-blue-500 overflow-auto w-full justify-center items-center pt-3'>

           
             <ul className='flex gap-x-4 sm:gap-x-9 z-0 pb-3.5 w-[92%] sm:w-[82%] mx-auto overflow-auto'>
                <>
                <li onClick={() => SelectBrand("all")} className={`capitalize border px-2 py-1 rounded-lg list-none block cursor-pointer font-semibold ${catName == 'all' ? 'text-gray-100 border-gray-400' : "text-white"}`}>
                        All
                    </li>
                {categoryDataList.map((val,i)=>{
                    return (<li key={i} onClick={() => fetchDataByCategory(val)} className={`capitalize border px-2 py-1 rounded-lg list-none block cursor-pointer font-semibold ${catName == val ? 'text-gray-100 border-gray-400' : "text-white"}`}>
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

           <div className='w-full min-h-[52vh] sm:min-h-[64vh]'>
           {hompageProducts || hompageProducts !== null ? <>{ hompageProducts.length > 0 ?<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-3 p-3 sm:gap-5 sm:p-5'>
                 {hompageProducts.map((val,i)=>{
                    return <ProductCard key={i} val={val}/>
                })} 
            </div>:
             <div className='min-h-[50vh] grid items-center justify-center'>No Data...</div>}</>
             
             : <div className='w-full min-h-[50vh] flex flex-col items-center justify-center'>
              <div className='text-white animate-ping font-semibold'>Sulur Service Center</div> 
              <CustomLoader/></div>}
           </div>
                </>}
        </div>
    )
}