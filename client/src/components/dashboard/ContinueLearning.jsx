import React from "react";

const courses = [
  { title: "Programming Foundations", instructor: "Dr. Sarat", progress: 85 },
  { title: "Data Structures", instructor: "Dr. Sarat", progress: 85 },
  { title: "Data Structures", instructor: "Dr. Sarat", progress: 85 },
  { title: "Data Structures", instructor: "Dr. Sarat", progress: 82 },
];

export default function ContinueLearning() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Continue Learning</h3>
      <div className="space-y-4">
        {courses.map((course, idx) => (
          <div key={idx} className="p-4 border rounded-lg">
            <h4 className="font-medium">{course.title}</h4>
            <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-right mt-1">{course.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
