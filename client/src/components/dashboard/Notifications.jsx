import React from "react";

const notifications = [
  { title: "Assignment Due Tomorrow", desc: "Learn core programming concepts", time: "2 hours ago", type: "warning" },
  { title: "New Course Available", desc: "Advanced Web Development course", time: "1 day ago", type: "info" },
];

export default function Notifications() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Recent Notifications</h3>
      <div className="space-y-4">
        {notifications.map((note, idx) => (
          <div key={idx} className="p-4 border rounded-lg flex flex-col">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{note.title}</h4>
              {note.type === "warning" ? (
                <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded">Warning</span>
              ) : (
                <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded">Info</span>
              )}
            </div>
            <p className="text-sm text-gray-600">{note.desc}</p>
            <p className="text-xs text-gray-400 mt-1">{note.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
