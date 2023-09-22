import React from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeTheme } from "../slices/themeSlice";
import { useSelector } from "react-redux";
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
    <nav className="flex justify-between p-10">
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
        <h2>Dark Mode</h2>
      </div>
    </nav>
  );
};

export default Menu;
