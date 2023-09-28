import React from "react";
import Borderland from "./Borderland";
import { useGetBorderCountriesQuery } from "../api/apiCountrySlice";

const Borderlands = ({ borders }) => {
  if (borders) {
    const { data, isLoading, isError } = useGetBorderCountriesQuery(
      borders.join(",")
    );

    return (
      <div className="md:flex items-center gap-10 md:flex-col lg:flex-row">
        <h2 className="font-bold max-sm:mt-10 mt-5 md:self-start lg:self-center">
          Border Countries:
        </h2>
        <div className="flex flex-wrap gap-5 mt-5 min-w-[20rem] max-w-[30rem] lg:min-w-[25rem]">
          {data?.map((borderland, i) => (
            <Borderland
              key={borderland.name.common}
              borderland={borderland}
              index={i}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default Borderlands;
