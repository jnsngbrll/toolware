import React from 'react';

export const Product = ({ productData }) => {
  const priceDecreasePercentage =
    ((productData.previousPrice - productData.price) /
      productData.previousPrice) *
    100;

  const pdpRounded = priceDecreasePercentage.toFixed(0);

  return (
    <div className="p-4 border hover:border-[--secondary]">
      <img
        className="w-[200px] h-[200px] border-b"
        src={productData.image}
        alt=""
      />
      <h1 className="line-clamp-1">{productData.name}</h1>
      <div className="flex items-center gap-2">
        <p className="text-[#E67E22] font-semibold">
          ₱{productData.price.toLocaleString()}
        </p>
        <p className="px-2 text-xs text-[--primary] bg-[--secondary] rounded-xl">
          - {pdpRounded}%
        </p>
      </div>
    </div>
  );
};
