import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="flex flex-col gap-2">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Image Search. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
