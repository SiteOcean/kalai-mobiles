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

    return(  <div style={backgroundImageStyle} className="bg-blue-500 px-3 grid items-center text-white sm:py-16 text-center">
      <div className="container mx-auto ">
        <h1 className="text-xl sm:text-4xl font-bold mb-4">Welcome to Sulur Service Center</h1>
        <p className="text-md sm:text-lg sm:w-[80%] mx-auto">Explore the latest in mobile tech – shop for smartphones, accessories, and gadgets.</p>
      </div>
    </div>

    )

}