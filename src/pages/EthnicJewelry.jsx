import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const EthnicJewelry = ({ addItemToCart }) => {
  const items = [
    { id: 7, name: 'Gold Necklace', price: '$100', img: '/images/Ethnic1.jpg', description: 'A beautiful gold necklace for special occasions.' },
    { id: 8, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic2.jpg', description: 'Elegant silver earrings for a touch of class.' },
    { id: 9, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic3.jpg', description: 'Elegant silver earrings for a touch of class.' },
    { id: 10, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic4.jpg', description: 'Elegant silver earrings for a touch of class.' },
    { id: 11, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic5.jpg', description: 'Elegant silver earrings for a touch of class.' },
    { id: 12, name: 'Silver Earrings', price: '$80', img: '/images/Ethnic6.jpg', description: 'Elegant silver earrings for a touch of class.' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Ethnic Jewelry</h2>
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

export default EthnicJewelry;
