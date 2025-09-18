import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex items-center w-full bg-white p-3 rounded-md shadow-sm">
        <Search className="text-gray-400 mr-2" size={18} />
        <input
          type="text"
          placeholder="Search courses"
          className="w-full outline-none text-sm"
        />
      </div>
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
        <SlidersHorizontal size={18} />
        <span className="text-sm">Filters</span>
      </button>
    </div>
  );
}
