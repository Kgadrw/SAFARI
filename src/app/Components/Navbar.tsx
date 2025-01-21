"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold text-teal-400">AF.SAFARI.COM</h1>
        </div>

        <div className="hidden md:flex space-x-8 text-right">
          <a href="/" className="hover:text-teal-400 transition duration-300">
            Home
          </a>
          <a href="/about" className="hover:text-teal-400 transition duration-300">
            About
          </a>
          <a href="/contact" className="hover:text-teal-400 transition duration-300">
            Contact
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <a
            href="/"
            className="block text-white py-2 hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="block text-white py-2 hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="/contact"
            className="block text-white py-2 hover:text-teal-400"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
