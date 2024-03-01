import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../data/ProductsData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import ProductsWithSameCategory from '../components/ProductsWithSameCategory';

export const ProductDetails = () => {
  const { id } = useParams();
  const product = ProductsData.find((e) => e.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl m-auto p-4 sm:p-2 flex flex-col gap-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 sm:items-start">
          <div className="relative">
            <img
              src={product.images[currentIndex]}
              alt=""
              className="lg:max-w-[450px] lg:max-h-[450px] bg-[--primary]"
            />
            <div className="w-full absolute flex items-center justify-around">
              <button onClick={prev}>
                <IoIosArrowBack />
              </button>
              <div className="flex gap-2">
                {product.images.map((_, imageIndex) => (
                  <div
                    key={imageIndex}
                    onClick={() => setCurrentIndex(imageIndex)}
                    className={`w-3 h-3 rounded-full transition duration-500 cursor-pointer ${
                      currentIndex === imageIndex
                        ? 'bg-[--secondary]'
                        : 'border border-[--secondary]'
                    }`}
                  ></div>
                ))}
              </div>
              <button onClick={next}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:justify-between">
          <div>
            <h1 className="lg:text-2xl font-bold">
              {product.name.toLocaleUpperCase()}
            </h1>
          </div>
          <div className="flex items-center">
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
            <p className="hidden lg:block text-xs w-[70px]">Quantity:</p>
            <button
              onClick={() => setQuantity(quantity - 1)}
              className="w-1/3 lg:w-[50px] p-2 border"
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              className="w-1/3 lg:w-[50px] p-2 text-center border-y"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-1/3 lg:w-[50px] p-2 border"
            >
              +
            </button>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2">
            <button className="w-full py-2 text-[--secondary] tracking-wider border">
              ADD TO WISHLIST
            </button>
            <button className="w-full py-2 text-[--primary] tracking-wider bg-[--secondary]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <ProductsWithSameCategory product={product} />
    </div>
  );
};
