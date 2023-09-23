import React from "react";

const Card = ({ flags, name, capital, population, region }) => {
  return (
    <article className="h-[25rem] md:self-start m-5 bg-neutral rounded overflow-hidden">
      <div>
        <img className="w-full]" src={flags.png} alt={name.common} />
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold my-5">{name.common}</h2>
        <p className="text-lg">
          <span className="font-bold">Population: </span>
          {population}
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