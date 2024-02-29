import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';
import d3 from '../assets/d3.jpg';
import d4 from '../assets/d4.jpg';
import d5 from '../assets/d5.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import h1 from '../assets/h1.jpg';
import h2 from '../assets/h2.jpg';

export const ProductsData = [
  {
    id: 1,
    name: 'Makita M56510 Electric Hand Drill (10mm)',
    description:
      'Dust proof bearings, zigzag varnish and resin coatings on motor improve durability Gear housing can be rotated to suit most cutting and grinding applications. Small circumference barrel grip for easy handling',
    images: [d1, d2, d3, d4, d5],
    category: 'Power Tools',
    price: 999,
    previousPrice: 2399,
  },
  {
    id: 2,
    name: 'Good Quality Steel Wire Pliers',
    description:
      'Keyed chuck of 10mm size ,metal gear train and dust sealed switch of powerful motor 550watts for light&medium drilling work in steel,aluminium,metal,wood,plastics etc',
    images: [p1, p2, p3],
    category: 'Hand Tools',
    price: 233,
    previousPrice: 499,
  },
  {
    id: 3,
    name: 'STANLEY WOOD HAMMER (450G/16OZ)',
    description: '',
    images: [h1, h2],
    category: 'Hand Tools',
    price: 199,
    previousPrice: 399,
  },
];
