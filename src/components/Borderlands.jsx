import React from "react";
import Borderland from "./Borderland";
import { useGetBorderCountriesQuery } from "../api/apiCountrySlice";

const Borderlands = ({ borders }) => {
  const { data, isLoading, isError } = useGetBorderCountriesQuery(
    borders.join(",")
  );

  console.log(data);

  return (
    <div className="flex flex-wrap gap-5 mt-10">
      {data?.map((borderland) => (
        <Borderland key={borderland.name.common} borderland={borderland} />
      ))}
    </div>
  );
};

export default Borderlands;
