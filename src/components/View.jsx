import React from "react";
import { motion } from "framer-motion";
import { fadeLeft } from "../animations";

const View = ({ flags, name }) => {
  return (
    <motion.article
      initial={fadeLeft.hidden}
      animate={fadeLeft.visible}
      className="w-full max-w-[40rem] min-w-[20rem] shadow-2xl max-sm:min-w-[15rem]"
    >
      <img className="w-full" src={flags.svg} alt={name.common} />
    </motion.article>
  );
};

export default View;
