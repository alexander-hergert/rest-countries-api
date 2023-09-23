import React from "react";
import Back from "../components/Back";
import View from "../components/View";
import Infos from "../components/Infos";
import Borderland from "../components/Borderland";

const InnerPage = () => {

  return (
    <section className="p-5 px-10">
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
