import React from "react";
import Card from "../components/Card";
import { useGetCountriesQuery } from "../api/apiCountrySlice";

const Cards = () => {
  const { data, isLoading, isError } = useGetCountriesQuery();

  return (
    <section
      className="mt-10 rounded flex flex-col 
    items-center justify-center md:flex-row flex-wrap"
    >
      {data?.map((item) => (
        <Card key={item?.name?.common} {...item} />
      ))}
    </section>
  );
};

export default Cards;
