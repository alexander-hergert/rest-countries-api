import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  return (
    <div
      className="flex items-center gap-5 p-5 bg-neutral
     rounded max-md:w-full"
    >
      <FaMagnifyingGlass className="cursor-pointer" />
      <input
        className="bg-neutral"
        type="text"
        name=""
        id=""
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
