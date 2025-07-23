import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-black text-yellow-400 py-6 text-center">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
      <span className="font-bold text-lg">Cozy Cabz</span>
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Cozy Cabz. All rights reserved.
      </span>
      <span className="text-sm">
        <a href="tel:8882467720" className="hover:underline">
          8882467720
        </a>{" "}
        |{" "}
        <a href="mailto:support@cozycabz.com" className="hover:underline">
          support@cozycabz.com
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
