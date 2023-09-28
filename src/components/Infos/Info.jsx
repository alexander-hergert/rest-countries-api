import React from "react";

const Info = ({ name, info }) => {
  return (
    <p className="my-1">
      <span className="font-bold">{name} </span>
      {info}
    </p>
  );
};

export default Info;
