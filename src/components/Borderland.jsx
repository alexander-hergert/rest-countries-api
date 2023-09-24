import React from "react";
import { Link } from "react-router-dom";
import { useGetBorderQuery } from "../api/apiCountrySlice";

const Borderland = ({ borderland }) => {
  const { data, isLoading, isError } = useGetBorderQuery(borderland);

  if (data) {
    const [name] = data;

    return (
      <div className="p-2 text-center rounded bg-neutral w-[8rem]">
        <Link to={`/${name.name.common}`}>{name.name.common}</Link>
      </div>
    );
  }
};

export default Borderland;
