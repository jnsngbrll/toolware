import React from 'react';
import { ProductsData } from '../data/ProductsData';
import { Product } from './Product';

export const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-xl font-extrabold">Products</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {ProductsData.map((product) => (
          <Product productData={product} />
        ))}
      </div>
    </div>
  );
};
