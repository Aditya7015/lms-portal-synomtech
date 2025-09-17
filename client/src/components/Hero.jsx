import React from "react";

export default function Hero() {
  return (
    <section className="bg-sky-200">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-sky-900 leading-tight">
          Welcome to SynomTech
        </h1>
        <p className="max-w-2xl mx-auto text-slate-700 mt-4 mb-6">
          Unlock your potential with our comprehensive learning management system.
          Access courses, track progress, and achieve your educational goals.
        </p>
        <button className="inline-block bg-sky-800 text-white px-6 py-3 rounded-md font-medium hover:bg-sky-900">
          start learning today
        </button>
      </div>
    </section>
  );
}
