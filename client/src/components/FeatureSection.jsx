import React from "react";
import FeatureCard from "./FeatureCard";

const IconCourse = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 7l9-4 9 4v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="#0369a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconInstructor = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="8" r="3" stroke="#0369a1" strokeWidth="1.2"/>
    <path d="M5 20a7 7 0 0 1 14 0" stroke="#0369a1" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);
const IconCert = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2v6l3 1-3 1-3-1 3-1V2z" stroke="#0369a1" strokeWidth="1.2"/>
    <path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" stroke="#0369a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconAnalytics = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M3 3v18h18" stroke="#0369a1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 14v-4" stroke="#0369a1" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M12 18v-8" stroke="#0369a1" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M17 10v-2" stroke="#0369a1" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export default function FeaturesSection() {
  const cards = [
    { icon: IconCourse, title: "Interactive Courses", description: "Access a wide variety of courses with interactive content and real-time progress tracking." },
    { icon: IconInstructor, title: "Expert Instructors", description: "Learn from industry professionals with years of experience in their respective fields." },
    { icon: IconCert, title: "Certifications", description: "Earn recognized certificates upon successful completion of courses and assessments." },
    { icon: IconAnalytics, title: "Progress Analytics", description: "Monitor your learning journey with detailed analytics and performance insights." },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">Why Choose SynomTech LMS?</h2>
          <p className="text-sm text-slate-600 mt-2">Our platform provides everything you need for a successful learning experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c) => (
            <FeatureCard key={c.title} icon={c.icon} title={c.title} description={c.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
