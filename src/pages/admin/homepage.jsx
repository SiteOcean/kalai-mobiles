import React, { useEffect, useState } from 'react';
import AdminNavbar from './navbar';
import CustomLoader from '@/components/loader';
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from 'axios';
import BufferedImage from '@/components/bufferImage';
import EditProductComp from '@/components/editProductComp';
let editItemData;
import { MdEdit } from "react-icons/md";
// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_BACKEND_URI
export default function AdminHomePage (){

    
  const [products, setProducts] = useState(null)
    const [editState, setEditState] = useState(false)

    const handleEdit=(item)=>{
      editItemData=item;
      setEditState(true)
    }

   
    const deleteObject = async(id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this object?");
              if (confirmDelete) {
          
         try{
          const response = await axios.post(backendPath+'deleteProductById', {_id:id});
          if(response.status == 200){
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
          const response = await axios.get(backendPath+'getAllProducts');
          if(response.status == 200){
            setProducts(response.data)
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const submitEdit=()=>{
        fetchData();
        editItemData=null;
        setEditState(false)
      }

    useEffect(()=>{
        fetchData();
    },[]);
    return(
      <div className='relative w-full'>
           <AdminNavbar/>
           {products && products.length > 0 ?<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 p-5'>
                 {products.map((val,i)=>{
                    return  <div key={i} className="max-w-sm rounded relative overflow-hidden shadow-lg bg-white">
                     <BufferedImage imageBuffer={val.images[0]} alt="Buffered Image" className="w-full h-[300px] object-fill" />
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
                      <MdEdit className='text-green-500 border-green-500 hover:border-green-300 bg-white border text-[34px] rounded-full p-1' onClick={()=>handleEdit(val)}/>
                        <MdOutlineDeleteOutline onClick={()=>deleteObject(val._id)} className='text-red-500 border border-red-500 hover:border-red-300 bg-white text-[34px] rounded-full p-1'/>
                    </div>
                  </div>
                })} 
            </div>: <CustomLoader/>}

            {editState ? <div className='absolute p-3 top-0 right-0 left-0 bg-gray-300 opacity-95'>
             <EditProductComp submitEdit={submitEdit} item={editItemData}/> 
            </div>: null}
    </div>
    )
};