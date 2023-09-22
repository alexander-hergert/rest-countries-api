import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeTheme } from "../slices/themeSlice";
import { useSelector } from "react-redux";

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

  return (
    <nav className="flex justify-between p-10">
      <h1 className="font-bold text-2xl">Where in the world?</h1>
      <div className="flex items-center gap-2">
        <MdOutlineDarkMode onClick={toggleTheme} className="text-xl" />
        <h2>Dark Mode</h2>
      </div>
    </nav>
  );
};

export default Menu;
