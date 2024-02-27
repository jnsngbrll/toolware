import React, { useEffect, useRef, useState } from 'react';
import {
  IoMenuOutline,
  IoSearchOutline,
  IoCloseOutline,
  IoCartOutline,
  IoHeartOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isSearchbarActive, setIsSearchbarActive] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    const outsideClick = (event) => {
      if (!searchRef.current.contains(event.target)) {
        setIsSearchbarActive(false);
      }
    };
    document.addEventListener('mousedown', outsideClick);
    return () => {
      document.removeEventListener('mousedown', outsideClick);
    };
  });

  return (
    <div className="max-w-7xl mx-auto pt-8 px-4 ">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <div className="text-2xl cursor-pointer">
              <IoMenuOutline />
            </div>
            <Link to="/" className="text-xl font-extrabold">
              Toolwares.
            </Link>
          </div>
          <div className="flex items-center gap-4 text-2xl font-bold">
            <div
              onClick={() => setIsSearchbarActive(true)}
              className={`cursor-pointer ${
                isSearchbarActive ? 'hidden' : 'block'
              }`}
            >
              <IoSearchOutline />
            </div>
            <IoHeartOutline />
            <IoCartOutline />
          </div>
        </div>
        <div
          ref={searchRef}
          className={`relative flex items-center trasition duration-300 z-0 ${
            isSearchbarActive ? 'mt-0' : 'mt-[-80px] opacity-0'
          }`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4 border rounded-3xl"
          />
          <div
            onClick={() => setIsSearchbarActive(false)}
            className="absolute right-4 text-2xl cursor-pointer"
          >
            <IoCloseOutline />
          </div>
        </div>
      </div>
    </div>
  );
};
