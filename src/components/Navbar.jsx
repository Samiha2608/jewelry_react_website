import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white border-green-200 dark:bg-green-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo2.png" className="h-16 rounded-full" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jewelry Rich</span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-green-500 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h18M1 7h18M1 13h18"
              />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
          <div className="relative p-2">
            <Link to="/cart" className="text-white">
              <FaShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            menuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-green-100 rounded-lg bg-green-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-green-800 md:dark:bg-green-800 dark:border-green-700">
            <li>
              <Link
                to="/jewelry"
                className="block py-2 px-3 text-green-800 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700"
              >
                Jewelry
              </Link>
            </li>
            <li>
              <Link
                to="/ethnic-jewelry"
                className="block py-2 px-3 text-green-800 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700"
              >
                Ethnic Jewelry
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-green-800 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700"
              >
                Clutch Bags
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
