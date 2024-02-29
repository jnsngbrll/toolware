import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Bann1 from '../assets/banner.jpg';
import Bann2 from '../assets/banner2.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={Bann1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={Bann2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export const Banner = () => {
  return (
    <div className="max-w-7xl m-auto px-4">
      <ControlledCarousel />
    </div>
  );
};
