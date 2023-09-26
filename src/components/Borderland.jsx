import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//import { useGetBorderQuery } from "../api/apiCountrySlice";

const Borderland = ({ borderland }) => {
  //const { data, isLoading, isError } = useGetBorderQuery(borderland);
  //used previously to fetch each border individually

  return (
    <motion.div className="p-2 text-center rounded bg-neutral w-[8rem] shadow-lg">
      <Link to={`/country/${borderland.name.common}`}>
        {borderland.name.common}
      </Link>
    </motion.div>
  );
};

export default Borderland;
