import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="mb-8">
          <h4 className="text-2xl font-bold mb-4">Stay Connected</h4>
          <p className="text-lg mb-4">
            Subscribe to our newsletter for the latest updates and news.
          </p>
          <form className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-full w-64 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white p-3 rounded-r-full text-lg hover:bg-teal-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://facebook.com" className="text-white hover:text-teal-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-teal-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-teal-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-teal-500">
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AF.SAFARI.COM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
