import React from "react";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const whatsappNumbers = ["+256772594470", "+256702594470"];
  
  const openWhatsApp = (number) => {
    const message = "Hello! I'm interested in your waste management services.";
    window.open(
      `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
              <h3 className="text-xl font-bold text-yellow-400">Bins Kampala</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Kampala's trusted garbage collection and waste management partner. Serving the community with excellence.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.facebook.com/binskampalaltd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://x.com/BinsKampala"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://vm.tiktok.com/ZS9R2ywCwsmMn-SkB7e/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 hover:text-yellow-400 transition-colors duration-300">
                <FaPhone className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Phone:</p>
                  <p className="font-semibold">+256 772 594470</p>
                  <p className="font-semibold">+256 752 594470</p>
                  <p className="font-semibold">+256 741 043511</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:text-yellow-400 transition-colors duration-300">
                <FaEnvelope className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Email:</p>
                  <p className="font-semibold">bins_pau@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:text-yellow-400 transition-colors duration-300">
                <FaMapMarkerAlt className="mt-1 text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Location:</p>
                  <p className="font-semibold">Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/payments"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  Make Payments
                </a>
              </li>
              <li>
                <a
                  href="/news"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  News & Events
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-yellow-400 mb-4">Connect via WhatsApp</h4>
            <p className="text-gray-300 text-sm mb-4">Chat with us directly for quick support</p>
            <div className="space-y-2">
              {whatsappNumbers.map((number, index) => (
                <button
                  key={index}
                  onClick={() => openWhatsApp(number)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <FaWhatsapp size={20} />
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="text-center space-y-2">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bins Kampala. All rights reserved. | Waste Management Excellence
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}
