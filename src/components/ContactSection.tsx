import React from "react";

const ContactSection: React.FC = () => (
  <section id="contact" className="w-full pt-28 pb-48 bg-yellow-400 text-black">
    <div className="max-w-3xl mx-auto px-4 flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-20 text-center tracking-tight drop-shadow-lg text-black">
        Contact Us
      </h2>
      <div className="flex flex-col gap-2 mb-6 text-lg w-full items-center">
        <span>
          <strong>Phone:</strong>{" "}
          <a href="tel:8882467720" className="hover:underline">
            8882467720
          </a>
        </span>
        <span>
          <strong>Email:</strong>{" "}
          <a href="mailto:support@cozycabz.com" className="hover:underline">
            support@cozycabz.com
          </a>
        </span>
        <span>
          <strong>Website:</strong>{" "}
          <a
            href="https://www.cozycabz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.cozycabz.com
          </a>
        </span>
        <span>
          <strong>Office:</strong> 405, Dda, Pocket-3, Dwarka Sector-14, New
          Delhi-110078
        </span>
      </div>
      <a
        href="mailto:support@cozycabz.com"
        className="bg-black text-yellow-400 font-semibold px-8 py-3 rounded shadow hover:bg-gray-900 transition"
      >
        CONTACT US
      </a>
    </div>
  </section>
);

export default ContactSection;
