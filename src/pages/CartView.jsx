// src/components/CartView.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Importing the named export 'useCart' from Cart.jsx
import Footer from '../components/Footer';

const CartView = ({ cartItems, removeItemFromCart, updateItemQuantity, clearCart }) => {
  const handleOrderConfirmation = () => {
    // Clear the cart after the order is placed
    clearCart();
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-md" />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button className="bg-red-500 text-white p-2 ml-4" onClick={() => removeItemFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <Link to="/confirm-order">
          <button onClick={handleOrderConfirmation} className="bg-green-500 text-white p-2 mt-4">
            Confirm Order
          </button>
        </Link>
      )}

    </div>
  );
};

export default CartView;
