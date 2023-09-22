import React from "react";

const Filter = () => {
  return (
    <div className="max-md:mt-10">
      <select className="bg-neutral p-5 rounded" id="filter">
        <option value="" selected hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europa</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
