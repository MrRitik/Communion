import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Company Name */}
        <h1 className="text-3xl font-bold">Communion</h1>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="#"
            className="text-white hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2025 Communion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
