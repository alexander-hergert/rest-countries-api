import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { changeTheme } from "../slices/themeSlice";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { spin } from "../animations";

const Menu = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themes);

  const toggleTheme = () => {
    if (theme === "light") {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }
  };

  const variants = spin;

  return (
    <nav className="flex justify-between p-5 md:px-[7rem] bg-neutral shadow mb-5">
      <h1 className="font-bold text-2xl">Where in the world?</h1>
      <div className="flex items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={theme === "light" ? "animationLeft" : "animationRight"}
          variants={variants}
          transition={{ duration: 0.25 }}
        >
          {theme === "light" ? (
            <MdOutlineDarkMode
              onClick={toggleTheme}
              className="text-xl cursor-pointer"
            />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className="text-xl cursor-pointer"
            />
          )}
        </motion.div>
        <h2 className="font-bold">Dark Mode</h2>
      </div>
    </nav>
  );
};

export default Menu;
