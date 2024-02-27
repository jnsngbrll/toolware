import React from 'react';
import { Link } from 'react-router-dom';

export const Product = ({ productData }) => {
  const priceDecreasePercentage =
    ((productData.previousPrice - productData.price) /
      productData.previousPrice) *
    100;

  const pdpRounded = priceDecreasePercentage.toFixed(0);

  return (
    <Link
      to={`/products/${productData.id}`}
      className="p-4 border hover:border-[--secondary]"
    >
      <img className="border-b" src={productData.image} alt="" />
      <h1 className="line-clamp-1">{productData.name}</h1>
      <div className="flex items-center gap-2">
        <p className="text-[#E67E22] font-semibold">
          ₱{productData.price.toLocaleString()}
        </p>
        <p className="px-2 text-xs text-[--primary] bg-[--secondary] rounded-xl">
          - {pdpRounded}%
        </p>
      </div>
    </Link>
  );
};
