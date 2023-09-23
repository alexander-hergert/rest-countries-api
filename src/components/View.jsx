import React from "react";
import { FaFaceLaughSquint } from "react-icons/fa6";

const View = ({ flags, name }) => {
  return (
    <article className="w-full max-w-[40rem]">
      <img className="w-full" src={flags.png} alt={name.common} />
    </article>
  );
};

export default View;
