import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { cartItems, firstName, lastName, email, phone, paymentMethod, message } = state || {};

  if (!state) {
    // If no state is available, redirect to the homepage or an appropriate page
    navigate('/');
    return null;
  }

  const handleConfirm = () => {
    // Typically, you would send this data to the backend
    console.log('Order confirmed:', state);
    // Clear the cart after confirming the order
    navigate('/message');
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Order Summary</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <h2 className="text-lg font-medium text-gray-900">Customer Information</h2>
                <p className="leading-7 text-sm text-gray-600">Name: {firstName} {lastName}</p>
                <p className="leading-7 text-sm text-gray-600">Email: {email}</p>
                <p className="leading-7 text-sm text-gray-600">Phone: {phone}</p>
                <p className="leading-7 text-sm text-gray-600">Payment Method: {paymentMethod}</p>
                {message && <p className="leading-7 text-sm text-gray-600">Message: {message}</p>}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <h2 className="text-lg font-medium text-gray-900">Cart Items</h2>
                {cartItems.length === 0 ? (
                  <p className="leading-7 text-sm text-gray-600">No items in the cart.</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm text-gray-600">
                      <p>{item.name} (x{item.quantity})</p>
                      <p>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                onClick={handleConfirm}
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default OrderSummary;
