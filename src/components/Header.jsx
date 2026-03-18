import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or at top of page
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at top
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`bg-gradient-to-r from-black to-gray-800 shadow-lg sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="Bins Logo" 
              className="h-16 w-16 transition-transform duration-300 group-hover:scale-110" 
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-bold text-2xl text-yellow-400">
              Bins Kampala Aba Kasasiro
            </span>
            <p className="text-xs text-yellow-100">Waste Management Solutions</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-semibold text-white text-sm sm:text-base">
          <Link
            to="/"
            className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link
            to="/services"
            className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>
          <Link
            to="/payments"
            className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Payments
          </Link>
          <Link
            to="/news"
            className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            News & Events
          </Link>
          <Link
            to="/contact"
            className="relative py-2 px-3 rounded-lg transition-all duration-300 hover:bg-white/20 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none text-2xl p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          {menuOpen ? <FaTimes className="animate-rotateIn" /> : <FaBars className="animate-bounceIn" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-black to-gray-900 px-6 pb-4 space-y-2 font-semibold text-white animate-slideDown overflow-hidden">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400"
            style={{ animationDelay: "0.1s" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400"
            style={{ animationDelay: "0.2s" }}
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={toggleMenu}
            className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400"
            style={{ animationDelay: "0.3s" }}
          >
            Services
          </Link>
          <Link
            to="/payments"
            onClick={toggleMenu}
            className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400"
            style={{ animationDelay: "0.4s" }}
          >
            Payments
          </Link>
          <Link
            to="/news"
            onClick={toggleMenu}
            className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400"
            style={{ animationDelay: "0.5s" }}
          >
            News & Events
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block py-3 px-4 rounded-lg hover:bg-white/20 transition-all duration-300 hover:translate-x-2 border-l-4 border-transparent hover:border-yellow-400"
            style={{ animationDelay: "0.6s" }}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
