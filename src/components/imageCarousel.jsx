import React from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 

const ImageCarousel =({imgData})=> { 
	 
		return ( 
			<Carousel interval={1000}> 
                {imgData && imgData.length > 0 ? imgData.map((image)=>{
                    return <img alt="img" src={image}/>
                }) : null}
				
			</Carousel> 
			
		); 
	
};

export default ImageCarousel
