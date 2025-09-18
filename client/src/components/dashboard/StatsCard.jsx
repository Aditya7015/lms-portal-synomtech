import React from "react";

export default function StatsCard({ icon, title, value }) {
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-sm">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="text-sm font-medium text-gray-600">{title}</h4>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  );
}
