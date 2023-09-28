import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../slices/filterSlice";
import { initial, addFilter } from "../../slices/filteredDataSlice";
import { useNavigate, useParams } from "react-router-dom";
import FilterListItem from "./FilterListItem";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  const data = useSelector((state) => state.data);
  const navigate = useNavigate();
  const params = useParams();

  const handleSelectFilter = (e) => {
    dispatch(changeFilter(e.target.textContent));
    navigate(`/${e.target.textContent}`);
  };

  useEffect(() => {
    if (!filter && params.region) {
      dispatch(changeFilter(params.region));
    }
  }, []);

  useEffect(() => {
    dispatch(initial(data));
    dispatch(addFilter(filter));
  }, [filter]);

  const handleOpenFilters = () => {
    setOpenFilter(!openFilter);
  };

  const list = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="max-md:mt-10 relative shadow max-md:w-[60%] md:min-w-[10rem] text-primary self-end">
      <div
        onClick={handleOpenFilters}
        className="flex cursor-pointer justify-between items-center bg-neutral 
      p-3 pl-10 text-md rounded"
      >
        <div>{params.region || "Filter by Region"}</div>
        <div>
          <RiArrowDropDownLine className="text-2xl" />
        </div>
      </div>
      {openFilter && (
        <menu
          className="bg-neutral mt-1 p-5 px-10 text-md rounded 
        absolute w-full shadow-2xl"
        >
          {list.map((item) => (
            <FilterListItem
              key={item}
              item={item}
              handleSelectFilter={handleSelectFilter}
            />
          ))}
        </menu>
      )}
    </div>
  );
};

export default Filter;
