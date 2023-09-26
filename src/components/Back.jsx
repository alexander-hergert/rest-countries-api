import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const Back = () => {
  return (
    <div className="bg-neutral w-[8rem] rounded text-primary shadow md:ml-10">
      <Link className="flex items-center justify-center gap-5 p-2" to="/">
        <BsArrowLeft className="text-2xl" />
        Back
      </Link>
    </div>
  );
};

export default Back;
