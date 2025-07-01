import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#FFFF01]">
      <div className="flex flex-col items-center justify-between p-4 sm:flex-row">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <Link to="/" className="flex items-center gap-2">
            <span>
              <img src="/logo.png" alt="Bins Logo" className="h-20 w-20" />
            </span>
          </Link>
        </h1>
        <ul className="flex flex-wrap gap-6 text-sm sm:text-lg font-medium text-gray-700">
          <li>
            <a
              href="/"
              className="hover:text-green-700 hover:underline underline-offset-4 transition duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-green-700 hover:underline underline-offset-4 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="hover:text-green-700 hover:underline underline-offset-4 transition duration-200"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:text-green-700 hover:underline underline-offset-4 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
