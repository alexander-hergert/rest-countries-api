import React from "react";
import { FaFaceLaughSquint } from "react-icons/fa6";


const View = ({flags, name}) => {

  return (
    <article>
      <img src={flags.png} alt={name.common} />
    </article>
  );
};

export default View;
