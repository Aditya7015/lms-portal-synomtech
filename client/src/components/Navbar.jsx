import React from "react";
import { Link } from "react-router-dom";

const Logo = () => (
  <div className="flex items-center gap-2">
    {/* simple SVG logo */}
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="4" fill="#0ea5e9" />
      <path
        d="M6 12h12M6 7h8"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
    <span className="font-bold text-lg">SYNOMTECH</span>
  </div>
);

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="hover:opacity-90">
          <Logo />
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
