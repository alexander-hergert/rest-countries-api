import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { useNavigate } from "react-router-dom";

const Card = ({ flags, name, capital, population, region, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${name.official}`);
  };

  return (
    <motion.article
      onClick={handleClick}
      initial={fadeUp.hidden}
      whileInView={fadeUp.visible}
      transition={{ delay: (index % 4) / 10, duration: 0.25 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="h-[23rem] md:self-start my-5 bg-neutral rounded 
    overflow-hidden shadow-xl w-[18rem] max-md:h-[25rem] max-md:w-[20rem]"
    >
      <div>
        <Link to={`/country/${name.official}`}>
          <img
            className="w-full shadow h-[10rem]"
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
    </motion.article>
  );
};

export default Card;
