import React from "react";

const benefits = [
  {
    icon: "👥",
    title: "Large Customer Base",
    desc: "We have a huge customer base that consists of foreigners as well as Indians.",
  },
  {
    icon: "🔄",
    title: "A Continuous Flow of Bookings",
    desc: "Long term contracts with renowned organizations for travel booking recursively.",
  },
  {
    icon: "💰",
    title: "99% Partial Prepaid Payments",
    desc: "Around 99% of our bookings are prepaid, ensuring booking and inflow of funds.",
  },
  {
    icon: "💵",
    title: "Cash Payments to the Driver",
    desc: "Clients pay the rest in cash to the driver, helpful for liquidity in your organization.",
  },
  {
    icon: "🤝",
    title: "Partnered with Reputed Corporate Clients",
    desc: "More than 50 organizations regularly use our travel services.",
  },
  {
    icon: "📅",
    title: "Get Payment on a Pre-Determined Date",
    desc: "We assure timely payouts so you don't have to worry about anything.",
  },
  {
    icon: "📈",
    title: "Guaranteed Growth of the Business",
    desc: "Multiple sources of bookings guarantee your growth without extra marketing.",
  },
  {
    icon: "🧘",
    title: "Stay Focused Without Worrying About Booking",
    desc: "Maintain the quality of service, the rest will be managed by us.",
  },
  {
    icon: "🚀",
    title: "The Simplest Way to Make Your Business Reach Greater Heights",
    desc: "Complete assistance on improving quality of services without investment.",
  },
];

const BusinessBenefitsSection: React.FC = () => (
  <section className="w-full py-28 bg-yellow-400 text-black">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center tracking-tight drop-shadow-lg">
        How You Can Expand the Horizon of Your Business With Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/90 rounded-2xl p-8 shadow-xl border border-yellow-200 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 ease-out group"
          >
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 shadow text-4xl mb-5 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-300">
              {b.icon}
            </span>
            <h3 className="text-xl font-bold mb-2 text-yellow-500 text-center tracking-wide">
              {b.title}
            </h3>
            <div className="w-10 h-1 bg-yellow-300 rounded-full mb-4 opacity-70"></div>
            <p className="text-base text-gray-700 text-center leading-relaxed">
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessBenefitsSection;
