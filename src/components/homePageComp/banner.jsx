import React, { useEffect } from 'react';

export default function BannerSection (){
  const backgroundImageStyle = {
    // backgroundImage: `url('sulur-service-center.jpeg')`,  // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',  // Adjust the height as needed
  };

    useEffect(()=>{

    },[])

    return(  <div style={backgroundImageStyle} className="bg-blue-500 bg-ble px-3 grid items-center text-white py-16 text-center">
      <div className="container mx-auto ">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">Welcome to Sulur Service Center</h1>
        <p className="text-lg sm:w-[80%] mx-auto">Discover the latest in mobile innovation and elevate your tech experience with our extensive range of smartphones, stylish accessories, and cutting-edge gadgets. Stay connected, stay trendy – shop now for the perfect blend of technology and style!</p>
      </div>
    </div>

    )

}