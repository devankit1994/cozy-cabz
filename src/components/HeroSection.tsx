"use client";

import React, { useState } from "react";
import BookRideModal from "./BookRideModal";

const HeroSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="w-full flex flex-col items-center justify-center text-center py-16 bg-black relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(0,0,0,0.3) 60%, rgba(255,215,0,0.1)), url('/car.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "calc(100vh - 5rem)",
      }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl z-0 animate-pulse"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
          Your Anytime <span className="text-yellow-400">Travel Partner</span>
        </h1>
        <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Reliable, safe, and comfortable rides across India. Experience
          seamless booking, professional drivers, and 24/7 support for all your
          journeys.
        </p>
        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-lg border border-white/10 min-w-[120px]">
            <span className="text-2xl font-bold text-yellow-400">50,000+</span>
            <span className="text-xs text-gray-200 mt-1">Happy Customers</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-lg border border-white/10 min-w-[120px]">
            <span className="text-2xl font-bold text-yellow-400">250+</span>
            <span className="text-xs text-gray-200 mt-1">Cities Covered</span>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 flex flex-col items-center shadow-lg border border-white/10 min-w-[120px]">
            <span className="text-2xl font-bold text-yellow-400">24/7</span>
            <span className="text-xs text-gray-200 mt-1">Customer Support</span>
          </div>
        </div>
        {/* Booking CTA */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition-all text-lg tracking-wide"
          >
            Book Your Ride
          </button>
          <a
            href="/services"
            className="bg-white/10 text-yellow-400 font-semibold px-8 py-3 rounded-full shadow-lg border border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all text-lg tracking-wide"
          >
            View Services
          </a>
        </div>
        <BookRideModal open={modalOpen} onClose={() => setModalOpen(false)} />
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-gray-200 text-sm">Verified Drivers</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12l2 2 4-4"
              />
            </svg>
            <span className="text-gray-200 text-sm">Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-yellow-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="11" width="18" height="7" rx="2" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4"
              />
            </svg>
            <span className="text-gray-200 text-sm">Secure & Safe Rides</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
