import React from "react";

function Search() {
  return (
    <div className="flex flex-col bg-primary py-3 px-4 rounded-lg">
      <div className="">
        <div className="">
          <input
            className=" bg-[#d9d9d9] rounded-full focus:outline-none focus:shadow-outline text-gray-700 px-2"
            type="text"
            placeholder="Type here to search"
          />
        </div>

        <div className="flex items-center justify-around my-4">
          <button
            className="bg-white hover:bg-[#f5f5f5] text-[#7B2869] rounded-lg focus:outline-none focus:shadow-outline py-0.5 px-4"
            type="button"
          >
            Events
          </button>
          <button
            className="bg-white hover:bg-[#f5f5f5] text-[#7B2869] rounded-lg focus:outline-none focus:shadow-outline py-0.5 px-4"
            type="button"
          >
            Page
          </button>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-white hover:bg-[#f5f5f5] text-[#7B2869] focus:outline-none focus:shadow-outline px-4 py-0.5 rounded-lg"
            type="button"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
