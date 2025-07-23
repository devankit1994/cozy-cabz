import React from "react";

const steps = [
  {
    icon: "🌐",
    title: "Contact our team or register on our website.",
  },
  {
    icon: "🕒",
    title: "Share your destination & departure timing.",
  },
  {
    icon: "🚘",
    title: "Select car model & calculate the fare.",
  },
  {
    icon: "✅",
    title: "Get confirmation in a few secs.",
  },
  {
    icon: "📍",
    title: "Wait for the cab to arrive at your place.",
  },
];

const HowToBookSection: React.FC = () => (
  <section className="w-full py-28 bg-black text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-18 tracking-tight drop-shadow-lg text-center">
        How To Book?
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center flex-1 min-w-[140px] group"
          >
            {/* Connector line */}
            {idx < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-70 blur-sm shadow-lg z-0" />
            )}
            {/* Step Card */}
            <div className="bg-gray-900/70 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center transition-transform duration-300 group-hover:scale-105 border border-yellow-400/20">
              <div className="bg-yellow-400 text-black rounded-full w-16 h-16 flex items-center justify-center text-4xl font-bold mb-3 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-yellow-400/40">
                {step.icon}
              </div>
              <span className="text-base font-semibold mb-1 tracking-wide uppercase text-yellow-400 drop-shadow">
                Step {idx + 1}
              </span>
              <p className="text-sm text-center text-gray-100 font-medium">
                {step.title}
              </p>
            </div>
            {/* Mobile connector */}
            {idx < steps.length - 1 && (
              <div className="block md:hidden w-1 h-8 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-400 opacity-70 blur-sm shadow-lg my-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToBookSection;
