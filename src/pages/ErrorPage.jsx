import React from "react";
import styled from "styled-components";
import Back from "../components/Back";
import { Link } from "react-router-dom";

const Style = styled.main`
  min-height: 100vh;
  padding-top: 10rem;
  background-color: black;
`;

const ErrorPage = () => {
  return (
    <Style
      className=" text-center text-slate-100 font uppercase 
  text-4xl bg-slate-950"
    >
      <div className="w-[10rem] m-auto bg-neutral text-primary rounded-xl py-5 hover:text-red-500">
        <Link to="/">Back Home</Link>
      </div>
      <div className="mt-[5rem] uppercase">
        sorry, we could not find the country.
        <span className="text-amber-500"> &nbsp;response 404!</span>
      </div>
    </Style>
  );
};

export default ErrorPage;
