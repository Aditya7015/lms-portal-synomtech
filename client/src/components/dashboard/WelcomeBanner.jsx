import React from "react";

export default function WelcomeBanner() {
  return (
    <div className="bg-blue-100 p-8 rounded-xl text-center">
      <h2 className="text-2xl font-semibold">Welcome back, John!</h2>
      <p className="text-gray-600">Ready to continue your learning journey?</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Browse Course
      </button>
    </div>
  );
}
