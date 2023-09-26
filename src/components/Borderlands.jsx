import React from "react";
import Borderland from "./Borderland";
import { useGetBorderCountriesQuery } from "../api/apiCountrySlice";

const Borderlands = ({ borders }) => {
  if (borders) {
    const { data, isLoading, isError } = useGetBorderCountriesQuery(
      borders.join(",")
    );

    return (
      <div className="md:flex items-center gap-10">
        <h2 className="font-bold mt-10">Border Countries:</h2>
        <div className="flex flex-wrap gap-5 mt-10 min-w-[20rem] max-w-[30rem]">
          {data?.map((borderland) => (
            <Borderland key={borderland.name.common} borderland={borderland} />
          ))}
        </div>
      </div>
    );
  }
};

export default Borderlands;
