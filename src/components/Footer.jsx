import React from 'react';
import { FooterData } from '../data/FooterData';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="hidden lg:block w-full mt-8 py-20 bg-[#F8F9F9]">
      <div className="max-w-7xl px-4 m-auto grid grid-cols-5">
        {FooterData.map((FData, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h1 className="font-bold tracking-wider">{FData.title}</h1>
            {FData.items.map((item, childIndex) => (
              <div key={childIndex}>
                <Link
                  to={item.url}
                  className="text-xs text-[--secondary] cursor-pointer transition hover:text-[--accent]"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <h1 className="font-bold tracking-wider">
            GET AWESOME DEALS FROM TOOLWARES
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[--secondary]">
              Subscribe to stay up to date on the best deals!
            </p>
            <input
              type="text"
              placeholder="Your Email"
              className="w-full text-sm border py-3 px-4"
            />
            <button className="w-[50%] text-[--primary] bg-[--secondary] py-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl m-auto py-10 px-4">
        <hr />
      </div>
      <div className="max-w-7xl m-auto px-4 flex items-center justify-between">
        <p className="text-sm text-[--secondary] font-bold tracking-wider">
          &copy; toolwares.com
        </p>
        <div className="flex items-center gap-4">
          <Link
            to="https://www.facebook.com/jnsngbrll"
            className="text-[--secondary] transition hover:text-[--hover]"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.facebook.com/jnsngbrll"
            className="text-[--secondary] transition hover:text-[--hover]"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.facebook.com/jnsngbrll"
            className="text-[--secondary] transition hover:text-[--hover]"
          >
            <FaTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
};
