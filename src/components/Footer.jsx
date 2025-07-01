import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">Bins Uganda</h3>
          <p>
            Kampala's trusted garbage collection and waste management partner.
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Contact Us</h4>
          <p>Phone: +256 700 000000</p>
          <p>Email: info@binsuganda.com</p>
          <p>Location: Kampala, Uganda</p>
        </div>

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

      <div className="text-center text-gray-400 text-xs mt-6">
        © {new Date().getFullYear()} Bins Uganda. All rights reserved.
      </div>
    </footer>
  );
}
