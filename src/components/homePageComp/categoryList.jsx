import React from 'react';

const CategoryList = ({ cat, SelectBrand }) => {

  return (
    <li onClick={() => SelectBrand(cat)} className='list-none block w-[500px]'>
    {cat.length > 10 ? cat.slice(0, 10) + '...' : cat}
  </li>
  
  );
};

export default CategoryList;
