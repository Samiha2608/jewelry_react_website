import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ClutchBag from './pages/ClutchBag';
import EthnicJewelry from './pages/EthnicJewelry';
import Jewelry from './pages/Jewelry';
import CartView from './pages/CartView';
import ConfirmOrder from './pages/ConfirmOrder';
import OrderSummary from './pages/OrderSummary';
import ViewItem from './pages/ViewItem';
import useCart from './components/Cart';
import Message from './pages/Message';
import Footer from './components/Footer';

const App = () => {
  const cart = useCart();

  return (
    <>
      <Navbar cartItemCount={cart.cartItems.length} />
      <Routes>
        <Route path="/" element={<ClutchBag addItemToCart={cart.addItemToCart} />} />
        <Route path="/ethnic-jewelry" element={<EthnicJewelry addItemToCart={cart.addItemToCart} />} />
        <Route path="/jewelry" element={<Jewelry addItemToCart={cart.addItemToCart} />} />
        <Route path="/cart" element={<CartView cartItems={cart.cartItems} removeItemFromCart={cart.removeItemFromCart} updateItemQuantity={cart.updateItemQuantity} />} />
        <Route path="/confirm-order" element={<ConfirmOrder cartItems={cart.cartItems} clearCart={cart.clearCart} />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/item/:id" element={<ViewItem addItemToCart={cart.addItemToCart} />} />
        <Route path="/message" element={<Message />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
};

export default App;
