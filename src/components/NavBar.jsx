import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50 ">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-20">
        <Link to='/'>
        <div className="text-3xl lg:text-5xl font-bold text-blue-600">
          Communion
        </div>
        </Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col lg:flex-row items-center gap-4 lg:gap-10 text-black font-bold text-xl absolute lg:static bg-white w-full lg:w-auto left-0 transition-all duration-300 ${
            isOpen
              ? "top-16 opacity-100"
              : "top-[-200px] opacity-0 lg:opacity-100"
          }`}
        >
          <Link to="/" onClick={toggleMenu}>
            <li className="hover:text-blue-600 cursor-pointer p-2">Home</li>
          </Link>
          <Link to="/event" onClick={toggleMenu}>
            <li className="hover:text-blue-600 cursor-pointer p-2">Events</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
