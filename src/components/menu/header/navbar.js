import React from 'react';

function Navbar() {
    return (
      <nav className="bg-gray-900 p-4 w-full">
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 items-center">

          <li>
            <a href="#main" className="text-white hover:text-gray-300 transition duration-300">
              
              Main
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-300 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;