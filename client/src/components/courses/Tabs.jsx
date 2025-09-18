import React, { useState } from "react";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4 mt-6 mb-4">
      <button
        onClick={() => setActiveTab("enrolled")}
        className={`px-6 py-2 rounded-md font-medium ${
          activeTab === "enrolled"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Enrolled (4)
      </button>
      <button
        onClick={() => setActiveTab("available")}
        className={`px-6 py-2 rounded-md font-medium ${
          activeTab === "available"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        Available (4)
      </button>
    </div>
  );
}
