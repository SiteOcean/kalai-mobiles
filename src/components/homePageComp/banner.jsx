import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function BannerSection (){
  const backgroundImageStyle = {
    // backgroundImage: `url('sulur-service-center.jpeg')`,  // Replace with your actual image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',  // Adjust the height as needed
  };

    useEffect(()=>{

    },[])

    return(  <div  className="bg-blue-500 w-full h-[74vh] grid items-center text-white sm:py-16 text-center">
      <div className="w-[96%] mx-auto">
        
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Welcome to Sulur Service Center!',
        // 500, // wait 1s before replacing "Mice" with "Hamsters"
        // 'We produce food for Hamsters',
      ]}
      wrapper="span"
      className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#fdff87]  px-2 font-bold text-center text-[30px] mt-3 rounded-md animate-bounce'
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block' }}
    
    />
    <p className="text-md sm:text-lg sm:w-[80%] mx-auto">Explore the latest in mobile tech – shop for smartphones, accessories, and gadgets.</p>
      </div>
    </div>

    )

}