import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Bins Uganda</h3>
          <p>
            Kampala's trusted garbage collection and waste management partner.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-2">Contact Us</h4>
          <p>Phone: +256 772 594470/ +256 702 594470</p>
          <p>Email: bins_pau@yahoo.com</p>
          <p>Location: Kampala, Uganda</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Our Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex justify-center gap-6 text-lg">
        <a
          href="https://www.facebook.com/binsuganda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.twitter.com/binsuganda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/binsuganda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/256700000000"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-gray-400 text-xs mt-4">
        © {new Date().getFullYear()} Bins Uganda. All rights reserved.
      </div>
    </footer>
  );
}
