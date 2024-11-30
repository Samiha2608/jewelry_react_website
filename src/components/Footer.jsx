import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white-600 body-font bg-green-800">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-4">
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
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
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
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
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
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Contact Us</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-white">Enter Email</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-green-100 bg-opacity-50 rounded border border-green-300 focus:bg-transparent focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className=" text-white bg-green-600 border-0  px-6 focus:outline-none hover:bg-green-300 rounded">Submit</button>
            </div>
            <p className="text-green-200 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />waistcoat green juice
            </p>
            <span className="inline-flex md:ml-auto md:mt-0 mt-4 justify-center md:justify-start">
              <Link to="/" className="text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link to="/" className="ml-3 text-white">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link to="/" className="ml-3 text-white">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link to="/" className="ml-3 text-white">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
