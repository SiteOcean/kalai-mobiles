import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

import { MdOutlineArrowBack } from 'react-icons/md';
import { categoryDataList } from '../api/config';
import { addItems } from '../api/service';
import CustomLoader from '@/components/loader';
import AdminNavbar from './navbar';
// NEXT_PUBLIC_LOCAL_BACKEND_URI // BACKEND_URI
let backendPath = process.env.NEXT_PUBLIC_BACKEND_URI
const AddProductForm = () => {
  const [name, setProductName] = useState('');
  const [title, setProductTitle] = useState('');
  const [description, setProductDescription] = useState('');
  const [whatSpecial, setwhatSpecial] = useState('');
  const [brand, setProductBrand] = useState('');
  const [price, setProductPrice] = useState('');
  const [offer, setProductOffer] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState([]);
  const [validationErrors, setValidationErrors] = useState({});
  const [isloading, setIsloading] = useState(false)
  const router = useRouter(null)

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    setImages(files);
  };

  const resetStateValue=()=>{
    setProductName('')
    setProductTitle('')
    setProductDescription('')
    setwhatSpecial('')
    setProductBrand('')
    setProductPrice('')
    setProductOffer('')
    setCategory('')
    setImages([])
    setValidationErrors({})
    setCategory('')
  }

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Product Name is required';
    }

    if (!title.trim()) {
      errors.title = 'Product Title is required';
    }
    if(!whatSpecial.trim()){
        errors.whatSpecial = "what's special required"
    }

    if (!description.trim()) {
      errors.description = 'Product Description is required';
    }

    if (!brand.trim()) {
      errors.brand = 'Product Brand is required';
    }
    if (!category.trim()) {
      errors.category = 'Product Category is required';
    }

    if (!price.trim()) {
      errors.price = 'Product Price is required';
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      errors.price = 'Product Price must be a valid positive number';
    }

    if (!offer.trim()) {
      errors.offer = 'Product Offer is required';
    } else if (isNaN(offer) || parseFloat(offer) < 0 || parseFloat(offer) > 100) {
      errors.offer = 'Product Offer must be a valid percentage between 0 and 100';
    }

    if (images.length === 0) {
      errors.images = 'Please upload at least one image';
    } else {
      const invalidImages = images.filter(
        (file) => !['image/jpeg', 'image/png', 'image/gif'].includes(file.type)
      );
      if (invalidImages.length > 0) {
        errors.images = 'Please upload only JPEG, PNG, or GIF images';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsloading(true)
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('brand', brand);
        formData.append('price', price);
        formData.append('offer', offer);
        formData.append('whatSpecial', whatSpecial);
        formData.append('category', category);
        images.forEach((image) => formData.append('images', image));
        
        const response = await addItems(formData, "addOffer");
        if (response) {
            resetStateValue()
            alert("Successfully added the item to the offer.");
            setIsloading(false)
        } 
      } catch (error) {
        alert("error")
        console.error('Error adding product:', error);
      }
      finally{
        setIsloading(false)
      }
    }
  };

  return (
    <div className='w-full'>
      {isloading ? <div className='w-full h-[60vh] flex justify-center items-center'><CustomLoader/></div>:
      <>
      <AdminNavbar/>
      <div className='w-[92%] mx-auto'>
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto flex flex-col px-2 pb-5  my-12 relative bg-white rounded shadow-md">
        <span className='absolute top-0 right-0 animate-pulse text-[#ffff4f] font-semibold px-2 py-1  rounded'>Offer</span>
      <h1 className='py-2 text-blue-500 text-center font-bold uppercase'>Add Offer</h1>
      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productName">
          Item Name:
        </label>
        <input
          className={`w-full border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="text"
          id="productName"
          value={name}
          onChange={(e) => handleInputChange(e, setProductName)}
        />
        {validationErrors.name && (
          <span className="text-red-500 text-sm">{validationErrors.name}</span>
        )}
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productTitle">
          Title:
        </label>
        <input
          className={`w-full border ${validationErrors.title ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="text"
          id="productTitle"
          value={title}
          onChange={(e) => handleInputChange(e, setProductTitle)}
        />
        {validationErrors.title && (
          <span className="text-red-500 text-sm">{validationErrors.title}</span>
        )}
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productTitle">
          What Special:
        </label>
        <input
          className={`w-full border ${validationErrors.whatSpecial ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="text"
          id="productTitle"
          value={whatSpecial}
          onChange={(e) => handleInputChange(e, setwhatSpecial)}
        />
        {validationErrors.title && (
          <span className="text-red-500 text-sm">{validationErrors.whatSpecial}</span>
        )}
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productDescription">
          Description:
        </label>
        <textarea
          className={`w-full border ${validationErrors.description ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          value={description}
          onChange={(e) => handleInputChange(e, setProductDescription)}
        />
        {validationErrors.description && (
          <span className="text-red-500 text-sm">{validationErrors.description}</span>
        )}
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productBrand">
          Brand:
        </label>
        <input
          className={`w-full border ${validationErrors.brand ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="text"
          id="productBrand"
          value={brand}
          onChange={(e) => handleInputChange(e, setProductBrand)}
        />
        {validationErrors.brand && (
          <span className="text-red-500 text-sm">{validationErrors.brand}</span>
        )}
      </div>
      <div className="mb-2">
        <label htmlFor="phoneSelect" className="block pb-1 text-gray-400 underline text-sm font-bold ">Select Category:</label>
        
        <select onChange={(e) => handleInputChange(e, setCategory)} id="phoneSelect" name="phone" className={`w-full border ${validationErrors.category ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md text-gray-500 capitalize focus:outline-none focus:border-blue-500`}>
        <option value="">Select Category</option>
        {categoryDataList.map((val, i)=>{
          return (<option key={i} value={val}>{val}</option>)
        })}
        </select>
      </div>
      {validationErrors.category && (
          <span className="text-red-500 text-sm">{validationErrors.category}</span>
        )}


      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productPrice">
          Price:
        </label>
        <input
          className={`w-full border ${validationErrors.price ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="text"
          id="productPrice"
          value={price}
          onChange={(e) => handleInputChange(e, setProductPrice)}
        />
        {validationErrors.price && (
          <span className="text-red-500 text-sm">{validationErrors.price}</span>
        )}
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productOffer">
          Offer:
        </label>
        <input
          className={`w-full border ${validationErrors.offer ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="text"
          id="productOffer"
          value={offer}
          onChange={(e) => handleInputChange(e, setProductOffer)}
        />
        {validationErrors.offer && (
          <span className="text-red-500 text-sm">{validationErrors.offer}</span>
        )}
      </div>

      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="images">
          Images:
        </label>
        <input
          className={`w-full border ${validationErrors.images ? 'border-red-500' : 'border-gray-300'} p-2 rounded-md focus:outline-none focus:border-blue-500`}
          type="file"
          id="images"
          multiple
          onChange={handleImageChange}
          accept="image/*"
        />
        {validationErrors.images && (
          <span className="text-red-500 text-sm">{validationErrors.images}</span>
        )}
      </div>

      <button
        className="bg-blue-500 text-white mt-3 p-2 rounded-md hover:bg-blue-600 focus:outline-none"
        type="submit"
      >
        Submit
      </button>
    </form>
        </div></>}
    </div>
  );
};

export default AddProductForm;
