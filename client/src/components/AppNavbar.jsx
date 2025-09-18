import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, BarChart2, User, LogOut } from "lucide-react";

/**
 * Navbar designed for logged-in pages (Dashboard / Courses / Progress / Profile)
 * - active item shows a blue pill with white text
 * - active icon gets a white circular background
 * - non-active items are gray and hover-blue
 */

const NAV_ITEMS = [
  { name: "Dashboard", path: "/dashboard", icon: <Home size={16} /> },
  { name: "Courses", path: "/courses", icon: <BookOpen size={16} /> },
  { name: "Progress", path: "/progress", icon: <BarChart2 size={16} /> },
  { name: "Profile", path: "/profile", icon: <User size={16} /> },
];

export default function AppNavbar() {
  const location = useLocation();
  const current = location.pathname;

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-blue-600 flex items-center justify-center">
            {/* simple two-tone logo */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="1" y="1" width="22" height="22" rx="4" fill="white" />
              <path d="M6 12h12M6 7h8" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-semibold text-lg text-slate-700">SYNOM TECH</span>
        </Link>

        {/* Center Nav */}
        <nav className="flex items-center gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = current === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-1 rounded-full font-medium transition
                  ${isActive ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-blue-600"}`}
              >
                {/* Icon: when active show white circular background */}
                <span
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition
                    ${isActive ? "bg-white text-blue-600" : "text-gray-400"}`}
                >
                  {item.icon}
                </span>

                {/* Hide text on very small screens, show on sm+ (keeps layout similar to screenshot) */}
                <span className="hidden sm:inline">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right side: Logout */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-3 py-1 border rounded-md text-sm text-gray-700 hover:bg-gray-50"
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
