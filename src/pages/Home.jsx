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
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section with Slideshow */}
      <section
        className="hero-section relative bg-cover bg-center text-white min-h-[70vh] flex items-center justify-center transition-all duration-1000 overflow-hidden"
        style={{
          backgroundImage: `url(${heroImages[currentIndex]})`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        {/* Decorative shapes */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black mb-2 leading-tight animate-fadeInUp drop-shadow-lg">
            Welcome to <span className="text-yellow-400">Bins Kampala</span>
          </h1>
          <div className="flex justify-center">
            <h2 className="text-5x1 md:text-6xl font-bold text-white animate-fadeInUp drop-shadow-lg" style={{ animationDelay: "0.1s", marginLeft: "20rem" }}>
              Aba Kasasiro
            </h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            Reliable Garbage Collection, Fumigation & Cleaning Services in Kampala
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
            <Link to="/services">
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-lg">
                Explore Services
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border-2 border-white/50 text-lg">
                Get in Touch
              </button>
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-yellow-400 w-8" : "bg-white/50 w-2"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We <span className="text-yellow-600">Do</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide comprehensive waste management solutions tailored to your needs
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Garbage Collection */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="relative overflow-hidden h-40">
              <img
                src="/trash.jpg"
                alt="Garbage Collection"
                className="w-full h-40 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Garbage Collection</h3>
              <p className="text-gray-600">
                Scheduled waste pickup and disposal for homes, offices, and
                businesses in Kampala.
              </p>
            </div>
          </div>

          {/* Fumigation */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="relative overflow-hidden h-40">
              <img
                src="/fumigation.jpeg"
                alt="Fumigation Service"
                className="w-full h-40 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Fumigation</h3>
              <p className="text-gray-600">
                Safe and effective pest control solutions for residential and
                commercial properties.
              </p>
            </div>
          </div>

          {/* Cleaning */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <div className="relative overflow-hidden h-40">
              <img
                src="/cleaning.jpg"
                alt="Cleaning Services"
                className="w-full h-40 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Cleaning Services</h3>
              <p className="text-gray-600">
                Deep cleaning for homes, offices, and post-construction sites — we
                leave your space spotless.
              </p>
            </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 my-12">
          {/* Kampala Team */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-md shadow-lg">
              <img
                src="/WhatsApp Image4 2026-03-17 at 10.02.48.jpeg"
                alt="Bins Kampala Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 px-4 text-sm font-semibold">
                Kampala Team
              </div>
            </div>
            <p className="text-gray-700 text-base md:text-lg">
              Our Kampala team is made up of experienced professionals dedicated to delivering high-quality waste collection, fumigation, and cleaning services across the city. Their local expertise ensures fast response times and consistent results.
            </p>
          </div>

          {/* Mukono Team */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-md shadow-lg">
              <img
                src="/mukono pic.jpeg"
                alt="Bins Mukono Team"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white py-2 px-4 text-sm font-semibold">
                Mukono Team
              </div>
            </div>
            <p className="text-gray-700 text-base md:text-lg">
              Our Mukono crew brings the same level of professionalism and care to surrounding communities. They are trained to meet the unique needs of each location while maintaining our high standards for safety and cleanliness.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className=" py-16 px-6 text-center relative overflow-hidden ">
        {/* Decorative Background Shape */}
        <div className="absolute inset-0 bg-black opacity-30 -skew-y-6 transform origin-top-left"></div>

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
              className="inline-block bg-white text-black font-bold px-8 py-3 rounded shadow-lg hover:bg-gray-100 transition"
            >
              Contact Us Now
            </a>
            <a
              href="/services"
              className="inline-block border-2 border-white  font-semibold px-8 py-3 rounded hover:bg-white hover:text-black transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
