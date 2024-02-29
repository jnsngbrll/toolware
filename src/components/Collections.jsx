import React from 'react';
import { CollectionsData } from '../data/CollectionsData';
import { Link, useLocation } from 'react-router-dom';

export const Collections = () => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex items-center justify-between p-2 bg-[--secondary] rounded-3xl">
      {CollectionsData.map((collection, collectionIndex) => (
        <Link
          key={collectionIndex}
          to={collection.pathname}
          className={`text-[--accent] px-2 rounded-xl ${
            location.pathname === collection.pathname
              ? 'text-[--secondary] font-semibold bg-[--accent]'
              : ''
          }`}
        >
          {collection.name}
        </Link>
      ))}
    </div>
  );
};
