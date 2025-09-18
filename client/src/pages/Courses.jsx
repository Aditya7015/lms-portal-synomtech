import React, { useState } from "react";
import SearchBar from "../components/courses/SearchBar";
import Tabs from "../components/courses/Tabs";
import CourseCard from "../components/courses/CourseCard";
import AppNavbar from "../components/AppNavbar";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpg'

export default function Courses() {
  const [activeTab, setActiveTab] = useState("enrolled");

  const courses = [
    {
      title: "Introduction to React",
      instructor: "Dr. Sarat",
      progress: 85,
      rating: 4.8,
      category: "Programming",
      nextTopic: "React Hooks Advanced",
      duration: 12,
      students: 1250,
      image: img1,
    },
    {
      title: "Data Structures & Algorithms",
      instructor: "Dr. Sarat",
      progress: 95,
      rating: 4.9,
      category: "Computer Science",
      nextTopic: "Graph Algorithms",
      duration: 12,
      students: 1250,
      image: img2,
    },
    {
      title: "Digital Marketing Fundamentals",
      instructor: "Dr. Sarat",
      progress: 95,
      rating: 4.9,
      category: "Marketing",
      nextTopic: "Social Media Strategy",
      duration: 12,
      students: 1250,
      image: img3,
    },
  ];

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
        <AppNavbar />
      <h2 className="text-xl font-semibold">My Courses</h2>
      <p className="text-gray-600 mb-6">
        Continue your learning journey or discover new courses
      </p>

      <SearchBar />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {courses.map((course, idx) => (
          <CourseCard key={idx} course={course} />
        ))}
      </div>
    </div>
  );
}
