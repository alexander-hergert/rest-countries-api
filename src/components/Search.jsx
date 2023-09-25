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
      className="flex items-center gap-5 p-5 bg-neutral
     rounded max-md:w-full"
    >
      <button>
        <FaMagnifyingGlass className="cursor-pointer" />
      </button>

      <input
        onChange={handleOnChange}
        className="bg-neutral"
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
