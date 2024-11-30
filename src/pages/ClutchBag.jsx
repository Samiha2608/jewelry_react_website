import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'; // Import the Footer component

const ClutchBag = ({ addItemToCart }) => {
  const items = [
    { id: 1, name: 'Red Clutch Bag', price: '$50', img: '/images/bag1.jpg', description: 'A stylish red clutch bag perfect for any occasion.' },
    { id: 2, name: 'Black Clutch Bag', price: '$60', img: '/images/bag2.jpg', description: 'A sleek black clutch bag that goes with everything.' },
    { id: 3, name: 'Black Clutch Bag', price: '$60', img: '/images/bag3.jpg', description: 'A sleek black clutch bag that goes with everything.' },
    { id: 4, name: 'Black Clutch Bag', price: '$60', img: '/images/bag4.jpg', description: 'A sleek black clutch bag that goes with everything.' },
    { id: 5, name: 'Black Clutch Bag', price: '$60', img: '/images/bag5.jpg', description: 'A sleek black clutch bag that goes with everything.' },
    { id: 6, name: 'Black Clutch Bag', price: '$60', img: '/images/bag6.jpg', description: 'A sleek black clutch bag that goes with everything.' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Clutch Bags</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md">
            <Link to={`/item/${item.id}`}>
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-xl">{item.name}</h3>
              <p>{item.price}</p>
            </Link>
            <button
              className="text-white p-2 mt-2 w-full bg-green-800 border-0 hover:bg-green-600 rounded"
              onClick={() => addItemToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Footer /> 
    </div>
  );
};

export default ClutchBag;
