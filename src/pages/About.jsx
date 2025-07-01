import React from "react";

export default function About() {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About Bins Uganda
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-lg mb-6">
          Bins Uganda is a trusted waste management company based in Kampala. We
          specialize in garbage collection, fumigation, and professional
          cleaning services. Our goal is to promote a cleaner, healthier
          environment for homes, businesses, and communities across Uganda.
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-6">
          To provide reliable, eco-friendly waste solutions and hygiene services
          that contribute to public health and environmental sustainability in
          urban areas.
        </p>

        {/* Vision */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Our Vision
        </h2>
        <p className="text-gray-700 mb-6">
          To become Kampala’s leading waste management and hygiene service
          provider through innovation, community involvement, and exceptional
          service delivery.
        </p>

        {/* Values */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Our Core Values
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
          <li>Integrity & Transparency</li>
          <li>Environmental Responsibility</li>
          <li>Customer Satisfaction</li>
          <li>Innovation & Efficiency</li>
          <li>Community Impact</li>
        </ul>

        {/* Team Image */}
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1581092334651-cba1b9f24b29?auto=format&fit=crop&w=900&q=60"
            alt="Our Team at Work"
            className="rounded shadow-lg w-full object-cover h-64"
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Our dedicated team in action
          </p>
        </div>
      </div>
    </div>
  );
}
