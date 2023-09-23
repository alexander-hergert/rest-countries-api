import React from "react";
import Borderland from "./Borderland";

const Borderlands = ({ borders }) => {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      {borders?.map((borderland) => (
        <Borderland key={borderland} borderland={borderland} />
      ))}
    </div>
  );
};

export default Borderlands;
