import React from 'react';
import { Product } from '../components/Product';
import { ProductsData } from '../data/ProductsData';

export default function ProductsWithSameCategory({ product }) {
  return (
    <div>
      <h1 className="font-extrabold text-[--accent]">
        PRODUCTS WITH SAME CATEGORY
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-8">
        {ProductsData.map((productsWithSameCategory) => {
          if (
            product.id !== productsWithSameCategory.id &&
            product.category === productsWithSameCategory.category
          ) {
            return (
              <Product
                productData={productsWithSameCategory}
                key={productsWithSameCategory.id}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}
