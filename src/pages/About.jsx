import React from "react";
import { FaLeaf, FaBullseye, FaAward, FaUsers, FaHandshake, FaRocket } from "react-icons/fa";

export default function About() {
  const values = [
    { icon: FaAward, title: "Integrity & Transparency", color: "blue" },
    { icon: FaLeaf, title: "Environmental Responsibility", color: "yellow" },
    { icon: FaUsers, title: "Customer Satisfaction", color: "purple" },
    { icon: FaRocket, title: "Innovation & Efficiency", color: "orange" },
    { icon: FaHandshake, title: "Community Impact", color: "red" },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            About <span className="text-yellow-600">Bins Kampala</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            Bins Kampala is a <span className="font-semibold text-yellow-600">trusted waste management company</span> based in Kampala. We specialize in garbage collection, fumigation, and professional cleaning services. Our goal is to promote a cleaner, healthier environment for homes, businesses, and communities across Uganda.
          </p>
          <p className="text-gray-600 text-lg">
            With years of experience and a dedicated team of professionals, we've established ourselves as a reliable partner in environmental hygiene and waste management solutions.
          </p>
        </div>

        {/* Our Locations */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-yellow-600">Locations</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Serving communities across Uganda with our comprehensive waste management services
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Branch - Kampala */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  🏢
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Main Branch</h3>
                  <p className="text-yellow-600 font-semibold">Kampala</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">📍 Location:</p>
                <p className="text-gray-600">Kansanga along Ggaba Road</p>
                <p className="text-gray-600">Kampala, Uganda</p>
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  ✓ Headquarters & Main Operations
                </p>
              </div>
            </div>

            {/* Mukono Branch */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  🏭
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mukono Branch</h3>
                  <p className="text-blue-600 font-semibold">Mukono District</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">📍 Location:</p>
                <p className="text-gray-600">Jinja-Kampala Road Plot 820</p>
                <p className="text-gray-600">Mukono, Uganda</p>
              </div>
              <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  ✓ Local Collection Services
                </p>
              </div>
            </div>

            {/* Entebbe Branch */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                  🌿
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Entebbe Branch</h3>
                  <p className="text-green-600 font-semibold">Entebbe District</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">📍 Location:</p>
                <p className="text-gray-600">Entebbe Central</p>
                <p className="text-gray-600">Entebbe, Uganda</p>
              </div>
              <div className="mt-4 p-3 bg-green-100 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✓ Environmental Services
                </p>
              </div>
            </div>
          </div>

          {/* Service Coverage Note */}
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="text-2xl">📞</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Coverage</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Our branches work together to provide comprehensive waste management coverage across Kampala Metropolitan Area, Mukono, and Entebbe districts. Contact any of our locations for personalized service quotes and scheduling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Profile Download */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-8 mb-12 border-l-4 border-yellow-500">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                📄 Learn More About Bins Kampala
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Download our comprehensive company profile to learn more about our services, history, achievements, and commitment to environmental sustainability.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Company History</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Services Overview</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Achievements</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Future Plans</span>
              </div>
            </div>
            <div className="text-center">
              <a
                href="/PROFILE (2).docx"
                download="Bins_Kampala_Company_Profile.docx"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Profile
              </a>
              <p className="text-sm text-gray-600 mt-3">
                File size: ~2MB • Format: Word Document
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl shadow-lg p-8 border-l-4 border-yellow-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-yellow-600 text-3xl" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">
              To provide reliable, eco-friendly waste solutions and hygiene services that contribute to public health and environmental sustainability in urban areas.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <FaRocket className="text-blue-600 text-3xl" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed">
              To become Kampala's leading waste management and hygiene service provider through innovation, community involvement, and exceptional service delivery.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our <span className="text-yellow-600">Core Values</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision and action we take
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              const colorMap = {
                green: { gradient: "from-green-500 to-green-600", icon: "text-green-600" },
                blue: { gradient: "from-blue-500 to-blue-600", icon: "text-blue-600" },
                purple: { gradient: "from-purple-500 to-purple-600", icon: "text-purple-600" },
                orange: { gradient: "from-orange-500 to-orange-600", icon: "text-orange-600" },
                red: { gradient: "from-red-500 to-red-600", icon: "text-red-600" },
                yellow: { gradient: "from-yellow-500 to-yellow-600", icon: "text-yellow-600" },
              };
              const colors = colorMap[value.color];

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${colors.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Image */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-2xl blur-xl opacity-20"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Main Team Image */}
              <div className="relative">
                <img
                  src="/team-dedicated.jpg"
                  alt="Our Team"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-xl">
                  <p className="text-white text-lg font-semibold">Our Dedicated Team</p>
                </div>
              </div>

              {/* WhatsApp Team Image */}
              <div className="relative">
                <img
                  src="/team-meeting.jpg"
                  alt="Team Meeting"
                  className="w-full h-64 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-xl">
                  <p className="text-white text-lg font-semibold">Professional Excellence</p>
                </div>
              </div>
            </div>

            {/* Professional Description */}
            <div className="mt-6 text-center">
              <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
                Our team consists of highly trained professionals dedicated to providing exceptional waste management and cleaning services.
                With years of experience and a commitment to excellence, we ensure every project is completed to the highest standards.
              </p>
            </div>
          </div>
        </div>

        {/* Service Gallery */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our <span className="text-yellow-600">Services in Action</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See our professional waste management and cleaning services at work across Kampala
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/pic1.jpeg"
                alt="Professional Waste Collection Service"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Waste Collection</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Pic2.jpeg"
                alt="Fumigation Services"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Fumigation</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Pic3.jpeg"
                alt="Cleaning Services"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Professional Cleaning</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src="/Pic4.jpeg"
                alt="Team at Work"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-semibold">Our Team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our <span className="text-yellow-600">Location</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find us in the heart of Kampala. We're strategically located for easy access across the city.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.757!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb8b1b6b6b6b%3A0x1234567890abcdef!2sKampala%2C%20Uganda!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bins Kampala Location"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">Kampala, Uganda</p>
                  <p className="text-gray-700">Central Business District</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Areas</h3>
                  <p className="text-gray-700">Kampala Metropolitan Area</p>
                  <p className="text-gray-700">Entebbe, Wakiso, Mukono</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl shadow-lg p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Building a Cleaner Kampala
          </h3>
          <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
            Whether you're looking for waste management services or want to partner with us, we'd love to hear from you.
          </p>
          <a href="/contact">
            <button className="bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg shadow-lg">
              Get in Touch Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
