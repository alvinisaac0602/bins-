import React from "react";
import { FaCheckCircle, FaPhone, FaTruck } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Garbage Collection",
      icon: FaTruck,
      image: "/trash.jpg",
      description:
        "Regular waste collection for households, businesses, and institutions. We ensure responsible disposal, recycling, and cleaner surroundings.",
      features: ["Scheduled pickups", "Eco-friendly disposal", "Large capacity trucks", "Professional team"],
    },
    {
      id: 2,
      title: "Fumigation",
      icon: FaCheckCircle,
      image: "/fumigation.jpeg",
      description:
        "Effective pest and insect control for homes, offices, and public spaces — using safe, certified chemicals to protect your environment.",
      features: ["Certified professionals", "Safe chemicals", "Long-term solutions", "Quick response"],
    },
    {
      id: 3,
      title: "Cleaning Services",
      icon: FaCheckCircle,
      image: "/cleaning.jpg",
      description:
        "From general home and office cleaning to deep post-construction cleanup — our team is trained to leave every space spotless.",
      features: ["Deep cleaning", "Post-construction cleanup", "Office maintenance", "24/7 available"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            Our <span className="text-yellow-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            We offer professional and affordable environmental hygiene solutions across Kampala with reliability and excellence.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-500 p-3 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white text-2xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <FaPhone size={16} />
                    Request Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Service Gallery */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work in <span className="text-yellow-600">Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional waste management and cleaning services delivered with excellence
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/pic1.jpeg"
                alt="Waste Collection Service"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Collection
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Pic2.jpeg"
                alt="Fumigation Service"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Fumigation
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Pic3.jpeg"
                alt="Cleaning Service"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Cleaning
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Pic4.jpeg"
                alt="Professional Team"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Our Team
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-8 md:p-12 text-white mb-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Bins Kampala?</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-200 flex-shrink-0" />
                <span>Professional and trained team with years of experience</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-200 flex-shrink-0" />
                <span>Affordable pricing with transparent fee structure</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-200 flex-shrink-0" />
                <span>Eco-friendly waste management practices</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-200 flex-shrink-0" />
                <span>24/7 customer support and emergency services</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-yellow-200 flex-shrink-0" />
                <span>Reliable and punctual service delivery</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a service or get a free consultation for your waste management needs.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg inline-flex items-center gap-2">
              <FaPhone size={20} />
              Contact Us Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
