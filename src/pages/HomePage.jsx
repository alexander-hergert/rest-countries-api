import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Cards from "../components/Cards";


const HomePage = () => {
  return (
    <section className="py-5 px-10">
      <section className="md:flex justify-between">
        <Search />
        <Filter />
      </section>
      <Cards />
    </section>
  );
};

export default HomePage;
