import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter/Filter";
import Cards from "../components/Cards/Cards";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  window.scrollTo(0, 0);
  const loaderData = useLoaderData(); //region

  return (
    <section className="p-5 lg:px-[5%] 2xl:px-[10%]">
      <section className="md:flex justify-between">
        <Search />
        <Filter />
      </section>
      <Cards loaderData={loaderData} />
    </section>
  );
};

export default HomePage;
