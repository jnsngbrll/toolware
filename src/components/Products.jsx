import React from 'react';
import { ProductsData } from '../data/ProductsData';
import { Product } from './Product';

export const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-[--accent] font-extrabold">PRODUCTS</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-8">
        {ProductsData.map((product) => (
          <Product productData={product} />
        ))}
      </div>
    </div>
  );
};
