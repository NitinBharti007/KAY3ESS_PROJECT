// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 shadow-lg bg-white text-black transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative">
        {/* Logo (Replace with Image) */}
        <div className="flex items-center">
          <Link to={"/"}>
          <img
            src="logo.png"
            alt="Logo"
            className="w-45 h-10 cursor-pointer"
          />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-blue-600 transition duration-300 transform hover:scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-2 top-3 z-50">
          <button
            onClick={toggleMobileMenu}
            className="p-3 focus:outline-none text-black"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose
                size={26}
                className="text-black hover:text-gray-500 transition duration-300"
              />
            ) : (
              <AiOutlineMenu
                size={26}
                className="text-black hover:text-gray-500 transition duration-300 animate__animated animate__pulse"
              />
            )}
          </button>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-0 md:hidden z-40 transition-all duration-300"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Mobile Menu (Drawer) */}
      <div
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 right-0 h-screen w-4/5 max-w-xs bg-white bg-opacity-90 backdrop-blur-sm text-black transform transition-transform duration-500 ease-in-out flex flex-col items-center pt-24 space-y-8 md:hidden z-30`}
      >
        <Link
          to="/"
          className="text-xl text-gray-800 hover:bg-blue-100 p-5 w-full text-center transform hover:scale-110 transition duration-300"
          onClick={toggleMobileMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-xl text-gray-800 hover:bg-blue-100 p-5 w-full text-center transform hover:scale-110 transition duration-300"
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-xl text-gray-800 hover:bg-blue-100 p-5 w-full text-center transform hover:scale-110 transition duration-300"
          onClick={toggleMobileMenu}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="text-xl text-gray-800 hover:bg-blue-100 p-5 w-full text-center transform hover:scale-110 transition duration-300"
          onClick={toggleMobileMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
