// components/BufferedImage.js
import React from 'react';


const BufferedImage = ({ imageBuffer, alt , className}) => {
     const binaryData = Buffer.from(imageBuffer.data, 'base64');
    const imageUrl = `data:${imageBuffer.contentType};base64,${binaryData.toString('base64')}`;
  return <img src={imageUrl} alt={alt} className={`object-fill ${className}`}/>;
};

export default BufferedImage;
