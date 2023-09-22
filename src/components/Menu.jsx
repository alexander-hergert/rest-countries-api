import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Menu = () => {
  return (
    <nav className="flex justify-between p-10">
      <h1 className="font-bold text-2xl">Where in the world?</h1>
      <div className="flex items-center gap-2">
        <MdDarkMode className="text-xl" />
        <h2>Dark Mode</h2>
      </div>
    </nav>
  );
};

export default Menu;
