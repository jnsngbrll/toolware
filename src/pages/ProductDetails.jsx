import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../data/ProductsData';
import { FaPlus, FaRegHeart } from 'react-icons/fa6';
import { Product } from '../components/Product';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductsData.find((e) => e.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-7xl m-auto px-2 sm:px-4 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8 p-4 bg-[--primary] lg:bg-[#F8F9F9] rounded-2xl">
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:items-start">
          <img
            src={product.images[currentIndex]}
            alt=""
            className="lg:max-w-[450px] lg:max-h-[450px] bg-[--primary] border rounded-2xl"
          />
          <div className="flex gap-2 sm:flex-col lg:w-[80px]">
            {product.images.map((image, index) => (
              <img
                key={index}
                onClick={() => setCurrentIndex(index)}
                src={image}
                alt=""
                className={`max-w-[80px] max-h-[80px] mx-auto bg-[--primary] rounded-xl border ${
                  currentIndex === index
                    ? 'border-[--secondary]'
                    : 'hover:border-[--secondary]'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:justify-between">
          <div className="pb-4 border-b">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p>{product.description}</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs w-[70px]">Category:</p>
            <p>{product.category}</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs w-[70px]">Price:</p>
            <div className="flex items-center gap-4">
              <p className="text-3xl font-bold text-[#E67E22]">
                ₱{product.price.toLocaleString()}
              </p>
              <p className="text-xl font-bold line-through">
                ₱{product.previousPrice.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-xs w-[70px]">Stock:</p>
            <p>{product.stock} pieces avalable</p>
          </div>
          <div className="flex items-center">
            <p className="text-xs w-[70px]">Quantity:</p>
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="w-[50px] h-[50px] border"
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="w-[50px] h-[50px] text-center border-y"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-[50px] h-[50px] border"
            >
              +
            </button>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <button className="w-full lg:w-auto flex items-center gap-2 p-2 pr-4 bg-[--secondary] border border-[--secondary] rounded-full">
              <div className="text-[--secondary] bg-[--primary] p-2 rounded-full">
                <FaPlus />
              </div>
              <span className="text-[--primary] font-bold">Cart</span>
            </button>
            <button className="w-full lg:w-auto flex items-center gap-2 p-2 pr-4 bg-[--primary] border border-[--secondary] rounded-full">
              <div className="p-2 text-[--primary] bg-[--secondary] border border-[--secondary] rounded-full">
                <FaRegHeart />
              </div>
              <span className="font-bold">Wishlist</span>
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
};
