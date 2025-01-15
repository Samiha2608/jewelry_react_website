import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white body-font bg-green-800">
      <div className="container mx-auto px-5 py-8">
        <div className="flex flex-wrap md:flex-nowrap text-center md:text-left">
          {/* Shopping Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Shopping</h2>
            <nav className="list-none">
              <li>
                <Link to="/miniProject" className="text-white hover:text-green-200">Jewelery</Link>
              </li>
              <li>
                <Link to="/ethnicJewelry" className="text-white hover:text-green-200">Ethnic Jewelry</Link>
              </li>
              <li>
                <Link to="/clutchBag" className="text-white hover:text-green-200">Clutch Bags</Link>
              </li>
            </nav>
          </div>

          {/* About Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">About</h2>
            <nav className="list-none">
              <li>
                <Link to="/about" className="text-white hover:text-green-200">About Us</Link>
              </li>
              <li>
                <Link to="/items" className="text-white hover:text-green-200">Items</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-green-200">Contact Us</Link>
              </li>
            </nav>
          </div>

          {/* Company Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-6 md:mb-0">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none">
              <li>
                <Link to="/cart" className="text-white hover:text-green-200">Cart</Link>
              </li>
              <li>
                <Link to="/sale" className="text-white hover:text-green-200">Sale</Link>
              </li>
              <li>
                <Link to="/deals" className="text-white hover:text-green-200">Deals</Link>
              </li>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
            <div className="flex flex-col sm:flex-row items-center sm:justify-start">
              <div className="relative w-full sm:w-auto mb-4 sm:mb-0 sm:mr-4">
                <label htmlFor="footer-field" className="leading-7 text-sm text-white">Enter Email</label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-green-100 bg-opacity-50 rounded border border-green-300 focus:bg-transparent focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white bg-green-600 border-0 px-6 py-2 focus:outline-none hover:bg-green-500 rounded">Submit</button>
            </div>
            <p className="text-green-200 text-sm mt-2">Bitters chicharrones fanny pack <br className="lg:block hidden" />waistcoat green juice</p>
            <div className="mt-4 flex justify-center sm:justify-start space-x-4">
              <Link to="/" className="text-white hover:text-green-400">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link to="/" className="text-white hover:text-green-400">
                <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link to="/" className="text-white hover:text-green-400">
                <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link to="/" className="text-white hover:text-green-400">
                <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
