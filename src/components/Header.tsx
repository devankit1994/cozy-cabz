"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { id: "home", label: "Home", href: "/", ariaLabel: "Go to homepage" },
  {
    id: "about",
    label: "About",
    href: "/about",
    ariaLabel: "Go to about page",
  },
  {
    id: "services",
    label: "Services",
    href: "/services",
    ariaLabel: "Go to services page",
  },
  {
    id: "corporate",
    label: "Corporate",
    href: "/corporate",
    ariaLabel: "Go to corporate page",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    ariaLabel: "Go to contact page",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  // (Optional: can be added if you want to auto-close on navigation)

  return (
    <header className="sticky top-0 w-full flex items-center justify-between px-6 h-20 bg-black shadow-md z-50">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <Image
            src="/logo.png"
            alt="Cozy Cabz Logo"
            width={60}
            height={60}
            className="rounded"
            priority
          />
          <span className="text-2xl font-bold text-yellow-400 tracking-wide">
            COZY CABZ
          </span>
        </Link>
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
        aria-label={
          mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((open) => !open)}
      >
        <span
          className={`block h-0.5 w-6 bg-yellow-400 transition-transform duration-300 ${
            mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-yellow-400 my-1 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-yellow-400 transition-transform duration-300 ${
            mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>
      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-6 text-white font-medium text-lg">
          {menuItems.map((item) => {
            const { href, ariaLabel } = item;
            const isActive = pathname === href;
            const className = `${
              isActive
                ? "text-yellow-400 font-bold"
                : "hover:text-yellow-400 transition"
            }`;
            return (
              <li key={item.id}>
                <Link href={href} className={className} aria-label={ariaLabel}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Mobile nav overlay */}
      {mobileMenuOpen && (
        <nav className="fixed inset-0 top-20 bg-black bg-opacity-95 flex flex-col items-center justify-start gap-8 py-10 z-50 md:hidden transition-all">
          <ul className="flex flex-col gap-8 text-white font-medium text-2xl w-full items-center">
            {menuItems.map((item) => {
              const { href, ariaLabel } = item;
              const isActive = pathname === href;
              const className = `${
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-yellow-400 transition"
              }`;
              return (
                <li key={item.id} className="w-full text-center">
                  <Link
                    href={href}
                    className={className}
                    aria-label={ariaLabel}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
