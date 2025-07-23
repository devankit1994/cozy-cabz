import React from "react";

// Inline SVG icons for each stat
const icons = [
  // Cities Covered
  <svg
    key={0}
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 24 24"
    className="text-yellow-500"
  >
    <path
      d="M12 2L2 7v13h20V7L12 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M12 22V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 22V15h10v7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>,
  // Cabs Available
  <svg
    key={1}
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 24 24"
    className="text-yellow-500"
  >
    <rect
      x="3"
      y="11"
      width="18"
      height="7"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 18v2M17 18v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>,
  // Years of Experience
  <svg
    key={2}
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 24 24"
    className="text-yellow-500"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 7v5l3 3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  // Happy Customers
  <svg
    key={3}
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 24 24"
    className="text-yellow-500"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M8 14s1.5 2 4 2 4-2 4-2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>,
  // Vendors
  <svg
    key={4}
    width="36"
    height="36"
    fill="none"
    viewBox="0 0 24 24"
    className="text-yellow-500"
  >
    <rect
      x="3"
      y="7"
      width="18"
      height="10"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7 17v2M17 17v2"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 7V5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
];

const stats = [
  {
    value: "250+",
    label: "Cities Covered\nAcross India",
    icon: React.cloneElement(icons[0], { key: 0 }),
  },
  {
    value: "1000+",
    label: "Cabs Available\nEveryday",
    icon: React.cloneElement(icons[1], { key: 1 }),
  },
  {
    value: "10+",
    label: "Years of Experience\nin the Industry",
    icon: React.cloneElement(icons[2], { key: 2 }),
  },
  {
    value: "50000+",
    label: "Happy Customers",
    icon: React.cloneElement(icons[3], { key: 3 }),
  },
  {
    value: "1200+",
    label: "Vendors Nationwide",
    icon: React.cloneElement(icons[4], { key: 4 }),
  },
];

const StatsBar: React.FC = () => (
  <section className="w-full bg-black py-28 flex flex-col items-center">
    <h2 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-2 tracking-tight drop-shadow-lg">
      Our Impact in Numbers
    </h2>
    <p className="text-white text-base sm:text-lg mb-8 text-center max-w-2xl font-medium">
      Trusted by thousands across India, CozyCabz delivers excellence,
      reliability, and comfort every day.
    </p>
    <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-[#181818] rounded-2xl shadow-xl px-6 py-6 transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
        >
          <div className="mb-3">{stat.icon}</div>
          <span className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-sm">
            {stat.value}
          </span>
          <span className="text-white text-sm sm:text-base text-center whitespace-pre-line font-semibold mt-2">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default StatsBar;
