import React from 'react';
import banner from '../assets/banner.jpg';

export const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <img className="w-full h-[350px] rounded-3xl" src={banner} alt="" />
    </div>
  );
};
