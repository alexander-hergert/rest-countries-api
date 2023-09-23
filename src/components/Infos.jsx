import React from "react";
import { useLoaderData } from "react-router-dom";

const Infos = () => {
  const [country] = useLoaderData();
  console.log(country);
  return <div>Infos</div>;
};

export default Infos;
