import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-red-600">FreshMart</h2>
            <p className="mt-4 text-gray-400">
              FreshMart is your one-stop shop for all your grocery needs. Fresh produce, quality items, and unbeatable prices.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2 hover:text-white transition">
                <a href="/about">About Us</a>
              </li>
              <li className="mb-2 hover:text-white transition">
                <a href="/products">Products</a>
              </li>
              <li className="mb-2 hover:text-white transition">
                <a href="/contact">Contact Us</a>
              </li>
              <li className="mb-2 hover:text-white transition">
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-red-600 mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">📍 123 FreshMart Lane, Grocer City</li>
              <li className="mb-2">📞 +1 234 567 890</li>
              <li className="mb-2">✉️ support@freshmart.com</li>
            </ul>
            {/* Social Media Icons - With real URLs (replace with your actual social media links) */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com/freshmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-red-600 rounded-full hover:bg-red-700 transition"
                aria-label="Visit our Facebook page"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://twitter.com/freshmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-red-600 rounded-full hover:bg-red-700 transition"
                aria-label="Visit our Twitter page"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="https://instagram.com/freshmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-red-600 rounded-full hover:bg-red-700 transition"
                aria-label="Visit our Instagram page"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://linkedin.com/company/freshmart"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex justify-center items-center bg-red-600 rounded-full hover:bg-red-700 transition"
                aria-label="Visit our LinkedIn page"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
          <p>&copy; 2024 FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;