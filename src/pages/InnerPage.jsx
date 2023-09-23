import React from "react";
import Back from "../components/Back";
import View from "../components/View";
import Infos from "../components/Infos";
import Borderlands from "../components/Borderlands";
import { useLoaderData } from "react-router-dom";

const InnerPage = () => {
  const [data] = useLoaderData();
  console.log(data);

  return (
    <section className="p-5 px-10 min-h-[100vh]">
      <Back />
      <article className="md:flex gap-5 items-center justify-around">
        <View {...data} />
        <div>
          <Infos {...data} />
          <Borderlands {...data} />
        </div>
      </article>
    </section>
  );
};

export default InnerPage;
