import React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="bg-white rounded-lg shadow-sm p-6 flex gap-4 items-start">
      <div className="w-12 h-12 flex items-center justify-center bg-sky-100 rounded-md">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        <p className="text-sm text-slate-600 mt-1">{description}</p>
      </div>
    </article>
  );
}
