import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';

const items = [
  { id: 1, name: 'Red Clutch Bag', price: '$50', img: '/images/bag1.jpg', description: 'A stylish red clutch bag perfect for any occasion.' },
  { id: 2, name: 'Black Clutch Bag', price: '$60', img: '/images/bag2.jpg', description: 'A sleek black clutch bag that goes with everything.' },
  { id: 3, name: 'Gold Necklace', price: '$100', img: '/images/bag3.jpg', description: 'A beautiful gold necklace for special occasions.' },
  { id: 4, name: 'Silver Earrings', price: '$80', img: '/images/bag4.jpg', description: 'Elegant silver earrings for a touch of className.' },
  { id: 5, name: 'Diamond Ring', price: '$500', img: '/images/bag5.jpg', description: 'A stunning diamond ring for a special someone.' },
  { id: 6, name: 'Platinum Bracelet', price: '$400', img: '/images/bag6.jpg', description: 'A luxurious platinum bracelet.' },
  { id: 7, name: 'Gold Necklace', price: '$100', img: '/images/Ethnic1.jpg', description: 'A beautiful gold necklace for special occasions.' },
  { id: 8, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic2.jpg', description: 'Elegant silver earrings for a touch of className.' },
  { id: 9, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic3.jpg', description: 'Elegant silver earrings for a touch of className.' },
  { id: 10, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic4.jpg', description: 'Elegant silver earrings for a touch of className.' },
  { id: 11, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic5.jpg', description: 'Elegant silver earrings for a touch of className.' },
  { id: 12, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic6.jpg', description: 'Elegant silver earrings for a touch of className.' },
  { id: 13, name: 'Diamond Ring', price: '$500', img: '/images/jewelery1.jpg', description: 'A stunning diamond ring for a special someone.' },
  { id: 14, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery2.jpg', description: 'A luxurious platinum bracelet.' },
  { id: 15, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery3.jpg', description: 'A luxurious platinum bracelet.' },
  { id: 16, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery4.jpg', description: 'A luxurious platinum bracelet.' },
  { id: 17, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery5.jpg', description: 'A luxurious platinum bracelet.' },
  { id: 18, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery6.jpg', description: 'A luxurious platinum bracelet.' },
];

const ViewItem = ({ addItemToCart }) => {
  const { id } = useParams();
  const item = items.find(item => item.id === parseInt(id));

  return (
    <div className="p-4 flex">
      {item ? (
        <>
          <div className="w-1/2 pr-4">
            <img src={item.img} alt={item.name} className="w-full h-auto object-cover rounded-md" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl mb-4">{item.name}</h2>
            <div className="flex mb-4">
            <span className="flex items-center">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-green-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>

            
            
            <p className="mb-4">{item.description}</p>
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              
            </div>
            <br />
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex">
            <p className="text-xl mb-4">{item.price}</p>
            
            <button
              onClick={() => addItemToCart(item)}
              className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
            >
              Add to Cart
            </button>
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
            </div>
          </div>
        </>
      ) : (
        <p>Item not found</p>
      )}

    </div>
  );
};

export default ViewItem;