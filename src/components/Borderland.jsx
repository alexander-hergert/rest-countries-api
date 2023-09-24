import React from "react";
import { Link } from "react-router-dom";
import useFetchData from "../customHooks/useFetchData";

const Borderland = ({ borderland }) => {
  const { data } = useFetchData(
    `https://restcountries.com/v3.1/alpha/${borderland}`
  );

  if (data !== null) {
    const [name] = data;

    return (
      <div className="p-2 text-center rounded bg-neutral w-[8rem]">
        <Link to={`/${name.name.common}`}>{name.name.common}</Link>
      </div>
    );
  }
};

export default Borderland;
