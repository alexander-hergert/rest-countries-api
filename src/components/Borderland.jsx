import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

//import { useGetBorderQuery } from "../api/apiCountrySlice";

const Borderland = ({ borderland, index }) => {
  //const { data, isLoading, isError } = useGetBorderQuery(borderland);
  //used previously to fetch each border individually

  return (
    <motion.div
      initial={fadeUp.hidden}
      animate={fadeUp.visible}
      transition={{ delay: index / 5 + 0.25, duration: 0.5 }}
      className="p-2 text-center rounded bg-neutral min-w-[8rem] shadow-lg self-center group hover:bg-primary"
    >
      <Link
        to={`/country/${borderland.name.official}`}
        className="group-hover:text-accent"
      >
        {borderland.name.common}
      </Link>
    </motion.div>
  );
};

export default Borderland;
