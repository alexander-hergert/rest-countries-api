import React from "react";
import Back from "../components/Back";
import View from "../components/View";
import Infos from "../components/Infos";
import Borderlands from "../components/Borderlands";
import { useLoaderData } from "react-router-dom";

const InnerPage = () => {
  const [data] = useLoaderData();

  return (
    <section className="p-5 px-10">
      <Back />
      <article className="md:flex gap-5">
        <View {...data} />
        <Infos {...data} />
      </article>
      <Borderlands {...data} />
    </section>
  );
};

export default InnerPage;
