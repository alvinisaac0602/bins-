import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-700 text-white p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Bins Uganda</h1>
        <p className="text-lg">
          Reliable Garbage Collection, Fumigation & Cleaning Services in Kampala
        </p>
        <Link to="/services">
          <button className="mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
            Explore Services
          </button>
        </Link>
      </section>

      {/* Services Overview */}
      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Garbage Collection */}
          <div className="bg-white rounded shadow p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1598966734791-57fd4a0e4f90?auto=format&fit=crop&w=500&q=60"
              alt="Garbage Collection"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Garbage Collection</h3>
            <p>
              Scheduled waste pickup and disposal for homes, offices, and
              businesses in Kampala.
            </p>
          </div>

          {/* Fumigation */}
          <div className="bg-white rounded shadow p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1581091012184-7f067c2d9f20?auto=format&fit=crop&w=500&q=60"
              alt="Fumigation Service"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Fumigation</h3>
            <p>
              Safe and effective pest control solutions for residential and
              commercial properties.
            </p>
          </div>

          {/* Cleaning */}
          <div className="bg-white rounded shadow p-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1581579185169-6c7bd62c9f0f?auto=format&fit=crop&w=500&q=60"
              alt="Cleaning Services"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Cleaning Services</h3>
            <p>
              Deep cleaning for homes, offices, and post-construction sites — we
              leave your space spotless.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 p-10 text-center">
        <h3 className="text-xl font-semibold mb-4">
          Ready for a cleaner, healthier environment?
        </h3>
        <Link to="/contact">
          <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
            Contact Us Today
          </button>
        </Link>
      </section>
    </main>
  );
}
