import { useState } from 'react';

const DescriptionReadmore = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='text-gray-500'>
      
        <p className=''><strong>Description: </strong>
        <span className='capitalize font-serif break-all'>{isExpanded ?  description : description.slice(0, 30) }</span>
        {description.length > 30 ? <span className='text-[#3ab8b1] ml-1 cursor-pointer text-[14px] font-semibold inline' onClick={toggleDescription}>
      {isExpanded ? 'ReadLess' : 'ReadMore...'}
      </span> : null}
         </p>    
      
    </div>
  );
};

export default DescriptionReadmore;
