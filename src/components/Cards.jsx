import React, { useEffect } from "react";
import Card from "../components/Card";
import { useGetCountriesQuery } from "../api/apiCountrySlice";
import { useSelector, useDispatch } from "react-redux";
import { loadCountries } from "../slices/dataSlice";
import ErrorPage from "../pages/ErrorPage";
import { useLocation } from "react-router-dom";

import {
  initial as initialFilter,
  addFilter,
} from "../slices/filteredDataSlice";
import {
  initial as initialSearch,
  searchFilter,
} from "../slices/searchDataSlice";

const Cards = ({ loaderData }) => {
  const { data, isLoading, isError } = useGetCountriesQuery();
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

  try {
    return (
      <section
        className="mt-10 rounded flex flex-col 
    items-center justify-center md:flex-row flex-wrap"
      >
        {countries?.map((item) => (
          <Card key={item?.name?.common} {...item} />
        ))}
      </section>
    );
  } catch (error) {
    if (countries?.status === 404) {
      console.log("This path does not exist!");
      return <ErrorPage />;
    }
  }
};

export default Cards;
