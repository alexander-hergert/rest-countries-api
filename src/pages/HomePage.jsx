import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const loaderData = useLoaderData(); //region

  return (
    <section className="py-5 px-10">
      <section className="md:flex justify-between">
        <Search />
        <Filter />
      </section>
      <Cards loaderData={loaderData} />
    </section>
  );
};

export default HomePage;
