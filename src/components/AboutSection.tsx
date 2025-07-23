import React from "react";

const AboutSection: React.FC = () => (
  <section id="about" className="w-full py-28 bg-yellow-400 text-black">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center tracking-tight drop-shadow-lg text-black">
        Vision & Mission
      </h2>
      <p className="text-lg sm:text-xl font-medium mb-6">
        We are the most trusted car rental service company that offers Cab
        booking services PAN India and try to make every journey fun. Our sole
        motive is to enhance the experience of each passenger and provide a
        chill of relaxation on the way. Mechanically fit & pristine cars and
        mini-buses are offered to all the{" "}
        <span className="font-bold">
          valuable clients without any geographical limitation
        </span>
        .
      </p>
      <div className="flex flex-wrap gap-8 mb-8">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">250+</span>
          <span className="text-sm text-black">Cities Covered</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">1000+</span>
          <span className="text-sm text-black">Cabs Available Everyday</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">10+</span>
          <span className="text-sm text-black">Years of Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">50000+</span>
          <span className="text-sm text-black">Happy Customers</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">1200+</span>
          <span className="text-sm text-black">Vendors Nationwide</span>
        </div>
      </div>
    </div>
    <div className="w-full py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <p className="text-lg sm:text-xl">
          Safe travel around the country. Make people fall in love with roads &
          travel. Give business opportunities to leading vendors. Make every
          travel a more & more convenient.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
