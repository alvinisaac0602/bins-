import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vyrzwfc",
        "template_cb6lca9",
        formData,
        "bP_oUslsDLMOJ4LRv"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert(
            "Thank you for reaching out to Bins Uganda. We'll get back to you soon!"
          );
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Email failed:", error.text);
          alert(
            "Sorry, there was an error sending your message. Please try again later."
          );
        }
      );
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white rounded shadow p-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-gray-700 mb-8 text-center">
          Have a question, need a quote, or want to schedule a service? Fill out
          the form below and we’ll be in touch shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block font-semibold text-gray-700 mb-1"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              pattern="[0-9+()-\s]*"
              placeholder="+256 700 000000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
