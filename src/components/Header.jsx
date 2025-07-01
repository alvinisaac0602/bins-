import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#FFFF01] shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Bins Logo" className="h-16 w-16" />
          <span className="font-bold text-xl text-gray-800">Bins Uganda</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700 text-sm sm:text-lg">
          <Link
            to="/"
            className="hover:text-green-700 hover:underline underline-offset-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-green-700 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-green-700 hover:underline underline-offset-4"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-700 hover:underline underline-offset-4"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? (
            <span className="text-2xl">&#x2715;</span> // ✕
          ) : (
            <span className="text-2xl">&#9776;</span> // ☰
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#FFFF01] font-medium text-gray-800 text-sm sm:text-base">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block hover:text-green-700"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block hover:text-green-700"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="block hover:text-green-700"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block hover:text-green-700"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
