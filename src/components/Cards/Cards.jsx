import React, { useEffect, useMemo } from "react";
import Card from "./Card";
import CardPlaceholder from "./CardPlaceholder";
import { useGetCountriesQuery } from "../../api/apiCountrySlice";
import { useSelector, useDispatch } from "react-redux";
import { loadCountries } from "../../slices/dataSlice";
import ErrorPage from "../../pages/ErrorPage";
import { useLocation } from "react-router-dom";

import {
  initial as initialFilter,
  addFilter,
} from "../../slices/filteredDataSlice";
import {
  initial as initialSearch,
  searchFilter,
} from "../../slices/searchDataSlice";

const Cards = ({ loaderData }) => {
  const queryKey = useMemo(() => {
    return ["getCountries", loaderData];
  }, [loaderData]);

  const { data, isLoading, isError } = useGetCountriesQuery(queryKey);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (data) {
      dispatch(loadCountries(data));
      dispatch(initialFilter(loaderData ? loaderData : data));
      dispatch(initialSearch(loaderData ? loaderData : data));
    }
  }, [data, location]);

  const countries = useSelector((state) => state.searchedData);
  const theme = useSelector((state) => state.themes);

  //create placeholder array
  if (isLoading) {
    const placeholderCountires = [];
    for (let i = 0; i < 10; i++) {
      if (theme === "light") {
        placeholderCountires.push({ src: `/images/white-flag.svg` });
      } else {
        placeholderCountires.push({ src: `/images/white-flag-2.svg` });
      }
    }

    return (
      <section
        className="mt-10 rounded flex flex-col items-center md:flex-row flex-wrap 
    md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 xl:gap-[3rem] 
    justify-items-center"
      >
        {placeholderCountires?.map((placeholder, i) => (
          <CardPlaceholder key={i} {...placeholder} />
        ))}
        ;
      </section>
    );
  }

  if (!isLoading) {
    try {
      if (countries.length === 0) {
        return (
          <div className="text-center mt-10 text-2xl font-bold text-primary">
            No countries found.
          </div>
        );
      }

      return (
        <section
          className="mt-10 rounded flex flex-col items-center md:flex-row flex-wrap 
    md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 xl:gap-[3rem] justify-items-center"
        >
          {countries?.map((item, i) => (
            <Card key={item?.name?.common} {...item} index={i} />
          ))}
        </section>
      );
    } catch (error) {
      if (countries?.status === 404) {
        console.log("This path does not exist!");
        return <ErrorPage />;
      }
    }
  }
};

export default Cards;
