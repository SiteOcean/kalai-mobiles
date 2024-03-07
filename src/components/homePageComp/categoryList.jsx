import React from 'react';

const CategoryList = ({ cat, SelectBrand , catName}) => {
  return (
    <li onClick={() => SelectBrand(cat)} className={`capitalize border px-2 py-1 rounded-lg list-none block cursor-pointer font-semibold ${catName == cat ? 'text-blue-500' : "text-gray-500"}`}>
  {cat.replace(/\s/g, '').length > 10 ? cat.replace(/\s/g, '').slice(0, 7) + '...' : cat.replace(/\s/g, '')}
</li>

  
  );
};
export default CategoryList;

