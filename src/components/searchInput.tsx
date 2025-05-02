"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter(); // Next.js router instance

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      setShowTooltip(true);

      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setShowTooltip(false);
      }, 2000);
      return;
    }

    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  // const handleSearch = () => {
  //   if (searchTerm.trim() !== "") {
  //     router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  //   }
  // };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="px-4 py-2 w-full focus:outline-none border border-black rounded-l-lg"
      />
      <button
        className="bg-red-600 px-4 py-2 text-white border border-red-600 rounded-r-lg"
        onClick={handleSearch}
      >
        Search
      </button>
      {showTooltip && (
        <div className="absolute left-0 top-full mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded shadow">
          Please enter a search term
        </div>
      )}
    </div>
  );
};

export default SearchInput;
