import React from "react";

const CardPlaceholder = ({ src }) => {
  return (
    <article
      className="max-md:my-5 md:self-start bg-neutral rounded 
    overflow-hidden shadow-xl max-sm:h-[25rem] max-sm:w-[20rem] max-md:w-[25rem] cursor-pointer w-full min-w-[15rem]
    md:h-[28rem] lg:h-[26rem] xl:h-[24rem]"
    >
      <div className="p-5">
        <img
          className="w-full"
          src={src}
          alt={src}
          loading="lazy"
        />
      </div>
    </article>
  );
};

export default CardPlaceholder;
