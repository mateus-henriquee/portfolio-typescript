import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-500 w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ul className="flex flex-col items-center space-y-2 md:flex-row md:justify-center md:space-y-0 md:space-x-8">
          <li>
            <a href="#main" className="text-white hover:text-gray-300 transition-colors duration-300">
              Main
            </a>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-300 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
