import React from 'react';

const CategoryList = ({ cat, SelectBrand , catName}) => {

  return (
    <li onClick={() => SelectBrand(cat)} className={`list-none block w-[500px] ${catName === cat && "bg-red-300"}`}>
    {cat.length > 10 ? cat.slice(0, 10) + '...' : cat}
  </li>
  
  );
};

export default CategoryList;
