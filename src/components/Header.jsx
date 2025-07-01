import React from "react";

export default function Header() {
  return (
    <header className="bg-slate-100">
      <div className="flex flex-col items-center justify-between p-4 sm:flex-row">
        <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-3xl font-bold text-green-500">Bins</span>
        </h1>
        <ul className="flex flex-wrap gap-4 text-sm sm:text-lg">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
