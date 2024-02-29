import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../data/ProductsData';
import { FaPlus, FaRegHeart } from 'react-icons/fa6';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductsData.find((e) => e.id === Number(id));

  const [quantity, setQuantity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-7xl m-auto px-4">
      <div className="flex gap-8 p-4 bg-[#F8F9F9] rounded-2xl">
        <div className="flex gap-4">
          <div className="w-[80px] h-[80px] flex flex-col gap-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                onClick={() => setCurrentIndex(index)}
                src={image}
                alt=""
                className={`bg-[--primary] rounded-xl border ${
                  currentIndex === index
                    ? 'border-[--secondary]'
                    : 'hover:border-[--secondary]'
                }`}
              />
            ))}
          </div>

          <img
            src={product.images[currentIndex]}
            alt=""
            className="max-w-[500px] min-h-[500px] bg-[--primary] border rounded-2xl"
          />
        </div>
        <div className="flex flex-col justify-between">
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
              disabled={quantity === 0}
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
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 p-2 pr-4 bg-[--secondary] border border-[--secondary] rounded-full">
              <div className="text-[--secondary] bg-[--primary] p-2 rounded-full">
                <FaPlus />
              </div>
              <span className="text-[--primary] font-bold">Cart</span>
            </button>
            <button className="flex items-center gap-2 p-2 pr-4 bg-[--primary] border border-[--secondary] rounded-full">
              <div className="p-2 text-[--primary] bg-[--secondary] border border-[--secondary] rounded-full">
                <FaRegHeart />
              </div>
              <span className="font-bold">Wishlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
