import React from 'react';

const CategoryList = ({ cat, SelectBrand , catName}) => {
  return (
    <li onClick={() => SelectBrand(cat)} className={`list-none block cursor-pointer font-bold ${catName == cat ? 'text-blue-500' : "text-gray-600"}`}>
  {cat.replace(/\s/g, '').length > 10 ? cat.replace(/\s/g, '').slice(0, 7) + '...' : cat.replace(/\s/g, '')}
</li>

  
  );
};
export default CategoryList;

