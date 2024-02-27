import React from 'react';

export const Searchbar = () => {
  return (
    <div
      ref={searchRef}
      className={`relative flex items-center trasition duration-300 z-0 ${
        isSearchbarActive ? 'mt-0' : 'mt-[-80px]'
      }`}
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 px-4 border rounded-3xl"
      />
      <div
        onClick={() => setIsSearchbarActive(false)}
        className="absolute right-4 text-2xl"
      >
        <IoCloseOutline />
      </div>
    </div>
  );
};
