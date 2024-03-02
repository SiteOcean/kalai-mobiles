// Carousel.js
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const MyCarousel = ({ images }) => {
  return (
    <div className=''>
        <AwesomeSlider>
      {images.map((image, index) => (
        <div key={index} data-src={image} />
      ))}
    </AwesomeSlider>
    </div>
  );
};

export default MyCarousel;
