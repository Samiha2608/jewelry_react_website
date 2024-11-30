import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ cartItemCount }) => {
  return (

    <nav class="bg-white border-green-200 dark:bg-green-800">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/images/logo2.png" class="h-16 rounded-full" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jewelery Rich</span>
    </a>
    <div class="flex md:order-2">
      <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-green-500 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700 rounded-lg text-sm p-2.5 me-1">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
      </button>
      <div class="relative hidden md:block">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
          <span class="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-black-800 border border-black-300 rounded-lg bg-black-50 focus:ring-black-500 focus:border-black-500 dark:bg-black-700 dark:border-green-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-black-500 dark:focus:border-black-500" placeholder="Search..." />
      </div>
      <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-500 rounded-lg md:hidden hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-200 dark:text-green-400 dark:hover:bg-green-700 dark:focus:ring-green-600" aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
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
 
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
        </div>
        
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-green-100 rounded-lg bg-green-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-green-800 md:dark:bg-green-800 dark:border-green-700">
        <li>
          <Link to="/jewelry" className="block py-2 px-3 text-green-800 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">Jewelry</Link>
          </li>
          <li>
          <Link to="/ethnic-jewelry" className="block py-2 px-3 text-green-800 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">Ethnic Jewelry</Link>
          </li>
          <li>
          <Link to="/" className="block py-2 px-3 text-green-800 rounded hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-green-700">Clutch bags</Link>
          </li>
        </ul>
        
      </div>
      
    </div>
    
  </nav>
  );
};

export default Navbar;
