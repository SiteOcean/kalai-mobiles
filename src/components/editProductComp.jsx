import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { MdOutlineArrowBack } from 'react-icons/md';
import { MdClose } from "react-icons/md";

const EditProductComp = ({item, submitEdit}) => {


    if(!item){
        return null
    }
  const [name, setProductName] = useState(item.name);
  const [title, setProductTitle] = useState(item.title);
  const [description, setProductDescription] = useState(item.description);
  const [brand, setProductBrand] = useState(item.brand);
  const [price, setProductPrice] = useState(item.price);
  const [offer, setProductOffer] = useState(item.offer);
  const [images, setImages] = useState(item.images);
  const [validationErrors, setValidationErrors] = useState({});

  const router = useRouter(null)
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!name) {
      errors.name = 'Product Name is required';
    }

    if (!title) {
      errors.title = 'Product Title is required';
    }

    if (!description) {
      errors.description = 'Product Description is required';
    }

    if (!brand) {
      errors.brand = 'Product Brand is required';
    }

    if (!price) {
      errors.price = 'Product Price is required';
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      errors.price = 'Product Price must be a valid positive number';
    }

    if (!offer) {
      errors.offer = 'Product Offer is required';
    } else if (isNaN(offer) || parseFloat(offer) < 0 || parseFloat(offer) > 100) {
      errors.offer = 'Product Offer must be a valid percentage between 0 and 100';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if(!item || !item._id) return;
    if (validateForm()) {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('brand', brand);
        formData.append('price', price);
        formData.append('_id', item._id);
        formData.append('offer', offer);
        if(images && images.length > 0){
            images.forEach((image) => formData.append('images', image));
        }
        
        const response = await axios.post('http://localhost:3030/project/updateProductById', formData);
       

        if (response.status == 200) {
          submitEdit()
          console.log('Product added successfully:');
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
  };

  return (
    <div className='w-full'>
      
      <form onSubmit={handleFormSubmit} className="max-w-md mx-auto p-2 my-12 bg-white relative rounded shadow-md">
        <MdClose onClick={submitEdit} className='text-red-500 border p-1 rounded font-bold text-[37px]
        absolute top-0 right-0'/>
      <h1 className='py-2 text-blue-500 text-center font-bold uppercase'>Edit Product</h1>
      <div className="mb-2">
        <label className="block text-gray-400 underline text-sm font-bold " htmlFor="productName">
          Product Name:
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

      <div className='flex justify-evenly py-2'>
      <button
        className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={submitEdit}
      >
        Cancel
      </button>
      <button
        className="bg-green-500 text-white py-1 px-2 rounded-md hover:bg-green-600 focus:outline-none"
        type="submit"
      >
        Submit
      </button>
      </div>
    </form>
    </div>
  );
};

export default EditProductComp;
