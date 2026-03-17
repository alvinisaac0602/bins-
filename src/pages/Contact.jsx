import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const whatsappNumbers = {
    primary: "+256772594470",
    secondary: "+256702594470",
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in Name, Phone, and Message fields.");
      return;
    }

    const whatsappMessage = `Hi Bins Uganda! 
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    const phoneNumber = whatsappNumbers.primary.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-yellow-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're here to help! Reach out to us via WhatsApp for quick responses or fill out the form below. We typically respond within minutes on WhatsApp.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* WhatsApp Cards */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FaWhatsapp className="text-yellow-500 text-3xl" />
                <h3 className="text-2xl font-bold text-gray-800">Quick Chat</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Message us directly on WhatsApp for immediate assistance. We're available Monday-Sunday!
              </p>
              <div className="space-y-3">
                {Object.entries(whatsappNumbers).map(([key, number]) => (
                  <button
                    key={key}
                    onClick={() => {
                      const phoneNumber = number.replace(/\D/g, "");
                      const message = "Hello! I'm interested in your waste management services.";
                      window.open(
                        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
                        "_blank"
                      );
                    }}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <FaWhatsapp size={20} />
                    {number}
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FaPhone className="text-blue-500 text-3xl" />
                <h3 className="text-2xl font-bold text-gray-800">Call Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Prefer to call? We're available during business hours.
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">+256 772 594470</p>
                <p className="text-lg font-semibold text-gray-800">+256 702 594470</p>
              </div>
            </div>

            {/* Email Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-purple-500 text-3xl" />
                <h3 className="text-2xl font-bold text-gray-800">Email Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Send us an email and we'll respond as soon as possible.
              </p>
              <p className="text-lg font-semibold text-gray-800">bins_pau@yahoo.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  pattern="[0-9+()-\s]*"
                  placeholder="+256 700 000000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-semibold text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:shadow-lg"
              >
                <FaWhatsapp size={20} />
                Send via WhatsApp
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                * indicates required field | We'll redirect you to WhatsApp to complete the message
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
