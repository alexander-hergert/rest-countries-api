import React from "react";

const FilterListItem = ({ item, handleSelectFilter }) => {
  return (
    <li onClick={handleSelectFilter} className="py-2 cursor-pointer hover:font-bold">
      {item}
    </li>
  );
};

export default FilterListItem;
