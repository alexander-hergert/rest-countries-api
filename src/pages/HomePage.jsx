import React from "react";
import Search from "../components/Search";
import Filter from "../components/Filter";
import { useGetPostsQuery } from "../api/apiSlice";

const HomePage = () => {
  return (
    <section className="py-5 px-10">
      <section className="md:flex justify-between">
        <Search />
        <Filter />
      </section>
    </section>
  );
};

export default HomePage;
