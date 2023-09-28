import React from "react";
import Info from "./Info";

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
  const languagesArray = Object.keys(languages).sort();

  const firstInfos = [
    { name: "Native Name: ", info: name.nativeName[languagesArray[0]]?.common },
    { name: "Population: ", info: population.toLocaleString() },
    { name: "Region: ", info: region },
    { name: "Sub Region: ", info: subregion },
    { name: "Capital: ", info: capital },
  ];
  const secondInfos = [
    { name: "Top Level Domain: ", info: tld },
    {
      name: "Currencies: ",
      info: currenciesArray
        .map((currency) => currencies[currency].name)
        .join(", "),
    },
    {
      name: "Languages: ",
      info: languagesArray.map((lang) => languages[lang]).join(", "),
    },
  ];

  return (
    <article className="min-w-[20rem] lg:min-w-[30rem] mt-10 md:mt-0">
      <h2 className="font-bold text-4xl max-md:my-5">{name.common}</h2>
      <div className="md:flex mt-10 md:flex-col lg:flex-row lg:gap-20 2xl:gap-40">
        <div>
          {firstInfos.map((item) => (
            <Info key={item.name} {...item} />
          ))}
        </div>
        <div className="max-lg:mt-10">
          {secondInfos.map((item) => (
            <Info key={item.name} {...item} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Infos;
