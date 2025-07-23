import React from "react";

const services = [
  {
    icon: "➡️",
    title: "One-way Trips",
    desc: "Explore the unseen roads with safety.",
  },
  {
    icon: "🔁",
    title: "Round Trip",
    desc: "Get your entire road trip covered with comfort.",
  },
  {
    icon: "✈️",
    title: "Airport",
    desc: "Commute to and from the airport without any delay.",
  },
  {
    icon: "📍",
    title: "Local",
    desc: "Make your every travel cozy & drive around the city.",
  },
];

const ServicesSection: React.FC = () => (
  <section
    id="services"
    className="relative w-full py-28 bg-yellow-400 text-black overflow-hidden"
  >
    {/* Decorative Blobs */}
    <div className="absolute -top-32 -left-32 w-80 h-80 bg-yellow-300/30 rounded-full blur-3xl z-0 animate-pulse"></div>
    <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-yellow-200/20 rounded-full blur-3xl z-0 animate-pulse"></div>
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center tracking-tight drop-shadow-lg text-black">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white backdrop-blur-md rounded-2xl p-8 shadow-xl border border-yellow-200/60 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:border-yellow-400 group"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/80 shadow-lg mb-5 text-4xl transition-all duration-200 group-hover:bg-yellow-500 group-hover:scale-110">
              {s.icon}
            </span>
            <h3 className="text-xl font-extrabold mb-2 text-yellow-500 text-center drop-shadow-sm tracking-wide">
              {s.title}
            </h3>
            <p className="text-base text-gray-900 text-center opacity-90 font-medium">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
