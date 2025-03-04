import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white">
            Titanic<span className="text-yellow-400">STORY</span>
          </h2>
          <p className="text-sm mt-1">© 2025 MyBrand. All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-6">
            <li>
              <NavLink to="/abou" className="hover:text-yellow-400 transition duration-300">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/movie" className="hover:text-yellow-400 transition duration-300">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedinIn size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
