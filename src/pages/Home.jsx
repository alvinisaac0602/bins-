import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroImages = ["/trashtruck.jpg", "/dumpster.jpg", "/hero2.jpg"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section with Slideshow */}
      <section
        className="relative bg-cover bg-center text-white min-h-[70vh] flex items-center justify-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-100"></div> */}

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-16 drop-shadow-md">
            Welcome to Bins Kampala
          </h1>
          <p className="text-lg drop-shadow-sm">
            Reliable Garbage Collection, Fumigation & Cleaning Services in
            Kampala
          </p>
          <Link to="/services">
            <button className="mt-6 bg-white text-green-700 font-semibold px-6 py-2 rounded hover:bg-gray-200 transition cursor-pointer">
              Explore Services
            </button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Garbage Collection */}
          <div className="bg-white rounded shadow p-6 text-center">
            <img
              src="/trash.jpg"
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
              src="/fumigation.jpeg"
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
              src="/cleaning.jpg"
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
      {/* <section className="bg-white p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Chairwoman</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-4 gap-8 my-12">
          <div className="flex-shrink-0">
            <img
              src="/team.jpg"
              alt="John Doe"
              className="w-full max-w-xl h-auto object-cover rounded-md shadow-lg"
            />
          </div>
          <p className="text-gray-700 text-base md:text-lg max-w-xl">
            At Bins Uganda, we have a dedicated team of professionals passionate
            about maintaining a clean and healthy environment. Our team is
            trained to provide top-notch services and are committed to ensuring
            the highest quality garbage collection, fumigation, and cleaning
            services in Kampala. With years of experience and passion for a
            cleaner environment, John leads the team to deliver exceptional
            results every day.
          </p>
        </div>
      </section> */}

      <section className="bg-white p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">The Managers</h2>
        <div className="flex flex-col md:flex-row items-stretch max-w-6xl mx-auto px-4 gap-8 my-12">
          {/* Image container: fills height, width smaller */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="/executiveteam.jpg"
              alt="Executive Team"
              className="h-full max-h-[400px] object-contain rounded-md"
              style={{ maxWidth: "200px" }} // controls width to make it smaller
            />
          </div>

          {/* Text container */}
          <div className="w-full md:w-2/3 flex items-center">
            <p className="text-gray-700 text-lg leading-relaxed">
              Meet our dedicated management team committed to delivering
              excellence in waste management, cleaning, and fumigation services.
              With years of combined experience and passion for sustainability,
              our team ensures that Bins Kampala remains a leader in the
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white p-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto px-4 gap-8 my-12">
          <div className="flex-shrink-0">
            <img
              src="/team.jpg"
              alt="John Doe"
              className="w-full max-w-xl h-auto object-cover rounded-md shadow-lg"
            />
          </div>
          <p className="text-gray-700 text-base md:text-lg max-w-xl">
            At Bins Uganda, we have a dedicated team of professionals passionate
            about maintaining a clean and healthy environment. Our team is
            trained to provide top-notch services and are committed to ensuring
            the highest quality garbage collection, fumigation, and cleaning
            services in Kampala. With years of experience and passion for a
            cleaner environment, John leads the team to deliver exceptional
            results every day.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" py-16 px-6 text-center relative overflow-hidden ">
        {/* Decorative Background Shape */}
        <div className="absolute inset-0 bg-green-900 opacity-30 -skew-y-6 transform origin-top-left"></div>

        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-3xl font-extrabold mb-4 drop-shadow-lg">
            Ready to Make Uganda Cleaner and Healthier?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Join hundreds of happy customers who trust Bins Uganda for garbage
            collection, fumigation, and cleaning services. Let’s work together
            for a better environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-bold px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us Now
            </a>
            <a
              href="/services"
              className="inline-block border-2 border-white  font-semibold px-8 py-3 rounded hover:bg-white hover:text-green-700 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
