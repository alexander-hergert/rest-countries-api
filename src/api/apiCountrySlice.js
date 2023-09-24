import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCountrySlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/all",
      staleTime: 1000 * 60 * 60, //1 hour
    }),
    getBorder: builder.query({
      query: (borderland) => `/alpha/${borderland}`,
      staleTime: 1000 * 60 * 60, //1 hour
    }),
  }),
});

export const { useGetCountriesQuery, useGetBorderQuery } = apiCountrySlice;
