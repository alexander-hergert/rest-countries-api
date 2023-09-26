import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { initial, searchFilter } from "../slices/searchDataSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredData = useSelector((state) => state.filteredData);

  const handleOnChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    dispatch(initial(filteredData));
    dispatch(searchFilter(searchTerm));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const seachTerm = e.target[1].value;
    navigate(`/country/${seachTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-5 p-5 px-10 bg-neutral
     rounded max-md:w-full shadow"
    >
      <button aria-label="Search">
        <FaMagnifyingGlass
          className="cursor-pointer
         text-xl text-slate-400"
        />
      </button>
      <input
        onChange={handleOnChange}
        className="bg-neutral outline-none"
        type="text"
        required
        name=""
        id=""
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default Search;
