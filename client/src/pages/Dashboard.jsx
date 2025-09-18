import React from "react";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import StatsCard from "../components/dashboard/StatsCard";
import ContinueLearning from "../components/dashboard/ContinueLearning";
import Notifications from "../components/dashboard/Notifications";
import { BookOpen, ClipboardList, BarChart2, Clock } from "lucide-react";
import AppNavbar from "../components/AppNavbar";

export default function Dashboard() {
  return (
    <div className="p-6 bg-blue-50 min-h-screen">
        <AppNavbar />
      <WelcomeBanner />

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
        <StatsCard icon={<BookOpen />} title="Enrolled Courses" value="4" />
        <StatsCard icon={<ClipboardList />} title="Assignments Due" value="3" />
        <StatsCard icon={<BarChart2 />} title="Overall Progress" value="78%" />
        <StatsCard icon={<Clock />} title="Study Hours" value="24h" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ContinueLearning />
        <Notifications />
      </div>
    </div>
  );
}
