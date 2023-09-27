import React from "react";

const Infos = ({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
}) => {
  const currenciesArray = Object.keys(currencies);
  const languagesArray = Object.keys(languages);

  return (
    <article className="min-w-[20rem] mt-10 md:mt-0">
      <h2 className="font-bold text-2xl max-md:my-5">{name.common}</h2>
      <div className="md:flex gap-10 mt-10 md:flex-wrap md:flex-col lg:flex-row">
        <div>
          <p>
            <span className="font-bold">Native Name: </span>
            {name.nativeName[languagesArray[0]]?.common}
          </p>
          <p>
            <span className="font-bold">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-bold">Sub Region: </span>
            {subregion}
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            {capital}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold">Top Level Domain: </span>
            {tld}
          </p>
          <p>
            <span className="font-bold">Currencies: &nbsp;</span>
            {currenciesArray
              .map((currency) => currencies[currency].name)
              .join(", ")}
          </p>
          <p>
            <span className="font-bold">Languages: &nbsp;</span>
            {languagesArray.map((lang) => languages[lang]).join(", ")}
            {/*sort*/}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Infos;
