import Link from 'next/link';
import React, { useState } from 'react';
import { MdClose, MdOutlineMenu } from "react-icons/md";

export default function AdminNavbar (){

    const [navState, setNavState] = useState(false)

    const handleNav=()=>{
        setNavState(!navState)
    }

    const handleOnBlur=()=>{
        setTimeout(() => {
            setNavState(false)
        }, 200);
    }
    return(
        <div  className='w-full flex bg-white justify-between px-3 py-2.5 sm:px-6 sticky top-0 z-50 sm:py-3 items-center shadow-lg '>

            <div className='text-[23px]'>Admin Section</div>


            <ul className='hidden sm:flex md:gap-12 text-[19px]'>
                <li><Link href={'homepage'}>Home</Link></li>
                <li><Link href={'offerPage'}>Offers</Link></li>
                <li><Link href={'addProduct'}>Add-Product</Link></li>
                <li><Link href={'addOffer'}>Add-Offer</Link></li>
            </ul>
            <button className='sm:hidden absolute top-3 right-3' onBlur={handleOnBlur} onClick={handleNav}>
            {navState ? <MdClose  className='text-[30px] rounded font-bold cursor-pointer border p-1 '/> : 
                        <MdOutlineMenu className='text-[30px] rounded font-bold cursor-pointer border p-1'/>
                    }
            </button>
            <ul className={`flex flex-col px-2 justify-center py-4 divide-y divide-slate-300 bg-slate-100 z-30 opacity-95 right-0 left-0 sm:hidden fixed gap-y-3 text-[19px] duration-500
            ${navState ? "top-[50px]" : "-top-[300px]"}`}>
                 <li><Link href={'homepage'}>Home</Link></li>
                <li><Link href={'offerPage'}>Offers</Link></li>
                <li><Link href={'addProduct'}>Add-Product</Link></li>
                <li><Link href={'addOffer'}>Add-Offer</Link></li>
            </ul>
        </div>

    )

}