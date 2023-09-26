import React from "react";
import { Link } from "react-router-dom";

const Card = ({ flags, name, capital, population, region }) => {
  return (
    <article
      className="h-[30rem] md:self-start m-5 bg-neutral rounded 
    overflow-hidden shadow-xl w-[25rem]"
    >
      <div>
        <Link to={`/country/${name.common}`}>
          <img
            className="w-full shadow h-[15rem]"
            src={flags.png}
            alt={name.common}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="p-5 px-10">
        <h2 className="text-xl font-bold my-5">
          <Link to={`/country/${name.common}`}>{name.common}</Link>
        </h2>
        <p className="text-lg">
          <span className="font-bold">Population: </span>
          {population.toLocaleString()}
        </p>
        <p className="text-lg">
          <span className="font-bold">Region: </span>
          {region}
        </p>
        <p className="text-lg">
          <span className="font-bold">Capital: </span>
          {capital}
        </p>
      </div>
    </article>
  );
};

export default Card;
