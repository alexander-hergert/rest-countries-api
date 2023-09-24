import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../slices/filterSlice";
import { initial, addFilter } from "../slices/filteredDataSlice";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  const data = useSelector((state) => state.data);

  const handleSelectFilter = (e) => {
    dispatch(changeFilter(e.target.textContent));
  };

  useEffect(() => {
    dispatch(initial(data));
    dispatch(addFilter(filter));
  }, [filter]);

  const handleOpenFilters = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="max-md:mt-10 relative">
      <div
        onClick={handleOpenFilters}
        className="flex cursor-pointer justify-between items-center bg-neutral 
      p-5 px-10 text-lg rounded"
      >
        <div>Filter by Region</div>
        <div>
          <RiArrowDropDownLine className="text-4xl" />
        </div>
      </div>
      {openFilter && (
        <menu className="bg-neutral mt-1 p-5 px-10 text-lg rounded absolute w-full">
          <li onClick={handleSelectFilter} className="cursor-pointer">
            Africa
          </li>
          <li onClick={handleSelectFilter} className="cursor-pointer">
            Americas
          </li>
          <li onClick={handleSelectFilter} className="cursor-pointer">
            Asia
          </li>
          <li onClick={handleSelectFilter} className="cursor-pointer">
            Europe
          </li>
          <li onClick={handleSelectFilter} className="cursor-pointer">
            Oceania
          </li>
        </menu>
      )}
    </div>
  );
};

export default Filter;
