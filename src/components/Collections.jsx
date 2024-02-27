import React from 'react';
import { CollectionsData } from '../data/CollectionsData';
import { Link, useLocation } from 'react-router-dom';

export const Collections = () => {
  const location = useLocation();

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex items-center justify-between p-2 bg-[--secondary] rounded-3xl">
        {CollectionsData.map((collection) => (
          <Link
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
    </div>
  );
};
