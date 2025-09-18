import React from "react";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full md:w-64">
      <img src={course.image} alt={course.title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded">
            {course.category}
          </span>
          <span className="text-yellow-500 font-medium">⭐ {course.rating}</span>
        </div>
        <h3 className="mt-2 font-semibold">{course.title}</h3>
        <p className="text-sm text-gray-500">by {course.instructor}</p>
        <p className="text-sm mt-1">Progress: {course.progress}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-400 mt-1">Next: {course.nextTopic}</p>
        <p className="text-xs text-gray-400">⏳ {course.duration} weeks | 👥 {course.students}</p>
        <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Continue
        </button>
      </div>
    </div>
  );
}
