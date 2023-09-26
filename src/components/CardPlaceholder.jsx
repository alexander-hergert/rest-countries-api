import React from "react";

const CardPlaceholder = ({ src }) => {
  return (
    <article
      className="h-[25rem] w-[20rem]
    md:self-start m-5 bg-neutral rounded overflow-hidden shadow"
    >
      <div className="p-5">
        <img className="w-full" src={src} alt={src} />
      </div>
      {/* <div className="p-5">
        <h2 className="text-xl font-bold my-5">...Loading</h2>
        <p className="text-lg">
          <span className="font-bold">Population: </span>
          ...Loading
        </p>
        <p className="text-lg">
          <span className="font-bold">Region: </span>
          ...Loading
        </p>
        <p className="text-lg">
          <span className="font-bold">Capital: </span>
          ...Loading
        </p>
      </div> */}
    </article>
  );
};

export default CardPlaceholder;
