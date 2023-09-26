import React from "react";

const View = ({ flags, name }) => {
  return (
    <article className="w-full max-w-[40rem] min-w-[25rem] shadow-2xl">
      <img className="w-full" src={flags.svg} alt={name.common} />
    </article>
  );
};

export default View;
