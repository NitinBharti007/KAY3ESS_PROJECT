// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-12">
    <div className="max-w-screen-xl mx-auto px-6">
      {/* Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm mb-4">
            We are a cutting-edge technology company delivering innovative solutions. Our mission is to empower businesses through tech and creativity.
          </p>
          <p className="text-sm">Contact us for custom solutions tailored to your needs.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-gray-300 transition-all">Home</Link> 
            </li>
            <li className="mb-2">
              <Link to="/services" className="hover:text-gray-300 transition-all">Services</Link>
            </li>
            <li className="mb-2">
              <Link to="/projects" className="hover:text-gray-300 transition-all">Privacy & Policy</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-gray-300 transition-all">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-4">
            Email: <a href="mailto:info@kay3ess.com" className="hover:text-gray-300">contact@kay3ess.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+91-120-4324817" className="hover:text-gray-300">+91-120-4324817</a>
          </p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://facebook.com" className="text-white text-3xl transform hover:scale-110 transition-all">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" className="text-white text-3xl transform hover:scale-110 transition-all">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" className="text-white text-3xl transform hover:scale-110 transition-all">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com" className="text-white text-3xl transform hover:scale-110 transition-all">
          <FaInstagram />
        </a>
      </div>

      

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 KAY3ESS Systems Private Limited. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
