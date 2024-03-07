import React, { useEffect, useState } from 'react';
import AdminNavbar from './navbar';
import CustomLoader from '@/components/loader';
import { MdOutlineDeleteOutline } from "react-icons/md";
import BufferedImage from '@/components/bufferImage';
import EditProductComp from '@/components/editProductComp';
let editItemData;
import { MdEdit } from "react-icons/md";
import { deleteProductById, fetchAllOffers } from '../api/service';
import { useRouter } from 'next/router';
import LoginAuth from '@/components/loginAuth';

export default function AdminOfferPage (){

    
  const [products, setProducts] = useState(null)
  const navigator = useRouter(null)
    // const [editState, setEditState] = useState(false)

    // const handleEdit=(item)=>{
    //   editItemData=item;
    //   setEditState(true)
    // }

   
    const deleteObject = async(id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this Offer?");
              if (confirmDelete) {
          
         try{
           const response = await deleteProductById(id, "deleteOfferById")
          if(response){
            setProducts(
              products.filter((val) => {
                return val._id !== id;
              })
            );
          }
         }
         catch(err){
          console.log(err)
         }
        }
      };
      
    const fetchData = async () => {
        
           try {
          const response = await fetchAllOffers();
          setProducts(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    //   const submitEdit=()=>{
    //     fetchData();
    //     editItemData=null;
    //     setEditState(false)
    //   }

    
    const navigateToViewPage=(ItemId)=>{
      navigator.push('offerView?id='+ItemId)
      }

    useEffect(()=>{
        fetchData();
    },[]);
    return(<LoginAuth>
      <div className='relative w-full'>
           <AdminNavbar/>
           {products ? <> {products.length > 0 ?<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5'>
                 {products.map((val,i)=>{
                    return  <div  key={i} className="max-w-sm rounded flex flex-col relative overflow-hidden shadow-lg bg-white">
                     <BufferedImage imageBuffer={val.images[0]} alt="Buffered Image" className="w-full h-[180px] object-fill" />
                    <div className="p-2 sm1;space-y-1">
                      <div className="font-bold text-md sm:text-xl ">{val.name}</div>
                      <p>{val.title}</p>
                      <p className="text-gray-400 text-sm sm:text-md ">{val.description.slice(0, 30)}</p>
                   
                     <div className='flex gap-x-3'>
                     <span className="inline-block bg-gray-100 rounded-md  text-sm font-semibold text-gray-700">
                        {val.price}<span className='text-[10px] text-gray-400 ml-1 '>Rs</span>
                      </span>
                      <span className="inline-block bg-gray-100 rounded-md  text-sm font-semibold text-gray-700">
                        offer:{val.offer}<span className='text-[10px] text-gray-400 ml-1 '>Rs</span>
                      </span>
                     </div>
                    </div>
                    <div className='absolute top-0 right-0 flex gap-x-3 items-center'>
                      {/* <MdEdit className='text-green-500 border-green-500 hover:border-green-300 bg-white border text-[34px] rounded-full p-1' onClick={()=>handleEdit(val)}/> */}
                        <MdOutlineDeleteOutline onClick={()=>deleteObject(val._id)} className='text-red-500 border border-red-500 hover:border-red-300 bg-white text-[34px] rounded-full p-1'/>
                    </div>
                    <button  className='bg-blue-500 px-2 py-1 rounded-b mt-1' onClick={()=>navigateToViewPage(val._id)}>View</button>
                  </div>
                })} 
            </div>: <div className='min-h-[50vh] grid items-center justify-center'>No Data...</div>}

            {/* {editState ? <div className='absolute p-3 top-0 right-0 left-0 bg-gray-300 opacity-95'>
             <EditProductComp submitEdit={submitEdit} item={editItemData}/> 
            </div>: null} */}
            </> : <CustomLoader/>}
    </div>
    </LoginAuth>
    )
};