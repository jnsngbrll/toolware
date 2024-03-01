import React, { useContext, useRef, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { IoCloseOutline } from 'react-icons/io5';
import { ProductsData } from '../data/ProductsData';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [searchBarInput, setSearchBarInput] = useState('');
  const [fillteredProductsName, setFillteredProductsName] = useState([]);
  const { isSearchbarActive, setIsSearchbarActive } = useContext(Context);

  const searchRef = useRef();
  const navigate = useNavigate();

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

  useEffect(() => {
    const result = ProductsData.filter((product) => {
      if (!searchBarInput) {
        return null;
      } else {
        return product.name
          .toLocaleLowerCase()
          .includes(searchBarInput.toLocaleLowerCase());
      }
    });
    setFillteredProductsName(result);
  }, [searchBarInput]);

  const handleSelectedProductNameClick = (id) => {
    navigate(`/products/${id}`);
    setIsSearchbarActive(false);
    setSearchBarInput('');
  };

  return (
    <div
      ref={searchRef}
      className={`relative flex flex-col gap-4 trasition duration-300 z-0 ${
        isSearchbarActive ? 'mt-0' : 'mt-[-60px] opacity-0'
      }`}
    >
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 border outline-none"
          value={searchBarInput}
          onChange={(event) => setSearchBarInput(event.target.value)}
        />
        <div
          onClick={() => setIsSearchbarActive(false)}
          className="absolute right-4 text-2xl cursor-pointer"
        >
          <IoCloseOutline />
        </div>
      </div>
      <div
        className={`absolute top-10 w-full flex flex-col gap-2 py-2 px-4 bg-[--primary] border ${
          fillteredProductsName.length !== 0 ? '' : 'hidden'
        }`}
      >
        {fillteredProductsName.map((fpn, fpnIndex) => (
          <div
            key={fpnIndex}
            onClick={() => handleSelectedProductNameClick(fpn.id)}
            className="cursor-pointer hover:bg-[#F8F9F9]"
          >
            {fpn.name}
          </div>
        ))}
      </div>
    </div>
  );
};
