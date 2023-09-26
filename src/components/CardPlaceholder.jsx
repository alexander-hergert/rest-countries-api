import React from "react";

const CardPlaceholder = ({ src }) => {
  return (
    <article
      className="h-[25rem] w-[20rem]
    md:self-start m-5 bg-neutral rounded overflow-hidden shadow"
    >
      <div className="p-5">
        <img className="w-full" src={src} alt={src} loading="lazy" />
      </div>
    </article>
  );
};

export default CardPlaceholder;
