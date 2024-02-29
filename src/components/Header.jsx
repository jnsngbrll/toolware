import React from 'react';
import { SearchBar } from './SearchBar';
import { Collections } from './Collections';
import { NavBar } from './NavBar';

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:py-8 ">
      <div className="flex flex-col gap-4">
        <NavBar />
        <SearchBar />
        <Collections />
      </div>
    </div>
  );
};
