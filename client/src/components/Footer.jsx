import React from "react";

const SmallLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="1" y="1" width="22" height="22" rx="4" fill="#0ea5e9" />
    </svg>
    <span className="font-bold">SYNOMTECH</span>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <SmallLogo />
          <p className="text-sm text-slate-600 mt-3">
            Leading Software Development & IT Training Institute in Visakhapatnam. Transforming careers through comprehensive training programs and innovative technology solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Courses</li>
            <li>Profile</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Popular Courses</h4>
          <ul className="text-sm text-slate-600 space-y-1">
            <li>Web Development</li>
            <li>Software Development</li>
            <li>SAAS Development</li>
            <li>Digital Marketing & SEO</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact Info</h4>
          <p className="text-sm text-slate-600">contact@synomtech.in</p>
          <p className="text-sm text-slate-600 mt-1">+91 12345 67890</p>
        </div>
      </div>

      <div className="text-center text-sm text-slate-500 py-4">
        © {new Date().getFullYear()} SYNOMTECH SOLUTIONS. All rights reserved.
      </div>
    </footer>
  );
}
