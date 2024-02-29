import React, { useContext, useRef, useEffect } from 'react';
import { Context } from '../context/Context';
import { IoCloseOutline } from 'react-icons/io5';

export const SearchBar = () => {
  const { isSearchbarActive, setIsSearchbarActive } = useContext(Context);
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
    <div
      ref={searchRef}
      className={`trasition duration-300 z-0 ${
        isSearchbarActive ? 'mt-0' : 'mt-[-60px] lg:mt-[-90px] opacity-0'
      }`}
    >
      <div className="relative flex items-center">
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
  );
};
