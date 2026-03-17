import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers } from "react-icons/fa";

export default function News() {
  const newsEvents = [
    {
      id: 1,
      type: "event",
      title: "Community Clean-Up Drive",
      date: "March 25, 2026",
      time: "8:00 AM - 12:00 PM",
      location: "Kampala Central Park",
      image: "/WhatsApp Image 2026-03-17 at 10.01.36.jpeg",
      description: "Join us for our monthly community clean-up drive in Kampala Central Park. Together, we can make our city cleaner and healthier for everyone.",
      attendees: "Expected: 50+ participants",
      category: "Community Service"
    },
    {
      id: 2,
      type: "news",
      title: "New Eco-Friendly Waste Collection Program Launched",
      date: "March 15, 2026",
      image: "/garbage-collection.png",
      description: "We're excited to announce our new eco-friendly waste collection program using electric vehicles and sustainable materials. This initiative will reduce our carbon footprint by 30%.",
      category: "Company News"
    },
    {
      id: 3,
      type: "event",
      title: "Environmental Awareness Workshop",
      date: "April 5, 2026",
      time: "2:00 PM - 5:00 PM",
      location: "Bins Kampala Office, Kampala",
      image: "/team.jpg",
      description: "Learn about proper waste management and environmental conservation in our free workshop. Expert speakers will share insights on sustainable living.",
      attendees: "Limited to 30 participants",
      category: "Education"
    },
    {
      id: 4,
      type: "news",
      title: "Partnership with Mukono Municipality",
      date: "March 10, 2026",
      image: "/mukono pic.jpeg",
      description: "We're proud to announce our partnership with Mukono Municipality to expand our waste management services to the district. This collaboration will serve over 5,000 households.",
      category: "Partnership"
    },
    {
      id: 5,
      type: "event",
      title: "World Environment Day Celebration",
      date: "June 5, 2026",
      time: "9:00 AM - 4:00 PM",
      location: "Various Locations, Kampala",
      image: "/hero.jpg",
      description: "Celebrate World Environment Day with us! Join tree planting, waste collection drives, and educational sessions across Kampala.",
      attendees: "Open to public",
      category: "Celebration"
    },
    {
      id: 6,
      type: "news",
      title: "New Fumigation Technology Introduced",
      date: "February 28, 2026",
      image: "/fumigation.jpeg",
      description: "We've upgraded our fumigation services with the latest eco-friendly technology. Our new methods are 40% more effective while being safer for the environment.",
      category: "Service Update"
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Community Service": "bg-green-100 text-green-800",
      "Company News": "bg-blue-100 text-blue-800",
      "Education": "bg-purple-100 text-purple-800",
      "Partnership": "bg-orange-100 text-orange-800",
      "Celebration": "bg-pink-100 text-pink-800",
      "Service Update": "bg-yellow-100 text-yellow-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            News & <span className="text-yellow-600">Events</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Stay updated with the latest news, upcoming events, and community initiatives from Bins Kampala.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* News & Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsEvents.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.type === 'event' ? 'bg-yellow-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {item.type === 'event' ? 'EVENT' : 'NEWS'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaCalendarAlt className="mr-2 text-yellow-500" />
                    {item.date}
                  </div>

                  {item.time && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaClock className="mr-2 text-yellow-500" />
                      {item.time}
                    </div>
                  )}

                  {item.location && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaMapMarkerAlt className="mr-2 text-yellow-500" />
                      {item.location}
                    </div>
                  )}

                  {item.attendees && (
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaUsers className="mr-2 text-yellow-500" />
                      {item.attendees}
                    </div>
                  )}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {item.type === 'event' && (
                  <button className="mt-4 w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-black to-gray-800 rounded-xl shadow-lg p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Connected with Bins Kampala
          </h3>
          <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
            Follow us for the latest updates, upcoming events, and environmental initiatives in your community.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg inline-flex items-center gap-2">
                <FaCalendarAlt size={20} />
                Suggest an Event
              </button>
            </a>
            <a href="https://vm.tiktok.com/ZS9R2ywCwsmMn-SkB7e/">
              <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border-2 border-white/50 text-lg">
                Follow Our Journey
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}