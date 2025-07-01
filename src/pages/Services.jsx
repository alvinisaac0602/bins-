import React from "react";

export default function Services() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg">
          We offer professional and affordable environmental hygiene solutions
          across Kampala.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Garbage Collection */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1604668915347-56595bda6e1b?auto=format&fit=crop&w=500&q=60"
              alt="Garbage Collection"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Garbage Collection</h2>
            <p className="text-gray-700">
              Regular waste collection for households, businesses, and
              institutions. We ensure responsible disposal, recycling, and
              cleaner surroundings.
            </p>
          </div>

          {/* Fumigation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1617727553252-01b5ed7e6226?auto=format&fit=crop&w=500&q=60"
              alt="Fumigation Service"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Fumigation</h2>
            <p className="text-gray-700">
              Effective pest and insect control for homes, offices, and public
              spaces — using safe, certified chemicals to protect your
              environment.
            </p>
          </div>

          {/* Cleaning Services */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src="https://images.unsplash.com/photo-1591531512806-61d106c12d0d?auto=format&fit=crop&w=500&q=60"
              alt="Cleaning Services"
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Cleaning Services</h2>
            <p className="text-gray-700">
              From general home and office cleaning to deep post-construction
              cleanup — our team is trained to leave every space spotless.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Want to schedule a service with us?
          </h3>
          <a href="/contact">
            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
              Contact Us Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
