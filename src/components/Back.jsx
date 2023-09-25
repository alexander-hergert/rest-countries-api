import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Back = () => {
  return (
    <div className="bg-neutral w-[6rem] rounded text-primary">
      <Link className="flex items-center gap-5 p-2" to="/">
        <BsArrowLeft className="text-2xl" />
        Back
      </Link>
    </div>
  );
};

export default Back;
