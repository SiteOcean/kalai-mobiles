import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BufferedImage from './bufferImage';

const ImageSlider = ({ images }) => {
  return (
    <Carousel 
    showArrows={true}
    showIndicators={true}
    className='rounded-md h-[300px] sm:[400px]'>
      {images.map((image, index) => (
        <div key={index}>
        <BufferedImage imageBuffer={image} alt="Buffered Image" className="w-full rounded-md h-[300px] sm:h-[400px] object-fill" />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
