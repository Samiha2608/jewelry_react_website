import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Jewelry = ({ addItemToCart }) => {
  const items = [
    { id: 13, name: 'Diamond Ring', price: '$500', img: '/images/jewelery1.jpg', description: 'A stunning diamond ring for a special someone.' },
    { id: 14, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery2.jpg', description: 'A luxurious platinum bracelet.' },
    { id: 15, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery3.jpg', description: 'A luxurious platinum bracelet.' },
    { id: 16, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery4.jpg', description: 'A luxurious platinum bracelet.' },
    { id: 17, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery5.jpg', description: 'A luxurious platinum bracelet.' },
    { id: 18, name: 'Platinum Bracelet', price: '$400', img: '/images/jewelery6.jpg', description: 'A luxurious platinum bracelet.' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Jewelry</h2>
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

export default Jewelry;
