import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations";
import { useNavigate } from "react-router-dom";

const Borderland = ({ borderland, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${borderland}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      initial={fadeUp.hidden}
      animate={fadeUp.visible}
      transition={{ delay: index / 5 + 0.25, duration: 0.5 }}
      className="p-1 text-center cursor-pointer rounded bg-neutral min-w-[8rem] shadow-lg self-center group hover:bg-primary"
    >
      <Link to={`/country/${borderland}`} className="group-hover:text-accent">
        {borderland}
      </Link>
    </motion.div>
  );
};

export default Borderland;
