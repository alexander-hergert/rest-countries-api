import React from "react";
import Back from "../components/Back";
import View from "../components/View";
import Infos from "../components/Infos";
import Borderland from "../components/Borderland";
import { useLoaderData } from "react-router-dom";

const InnerPage = () => {

  return (
    <section>
      <Back />
      <article>
        <View />
        <Infos />
      </article>
      <Borderland />
    </section>
  );
};

export default InnerPage;
