import React, { useEffect } from "react";
import Back from "../components/Back";
import View from "../components/View";
import Infos from "../components/Infos";
import Borderlands from "../components/Borderlands";
import { useLoaderData } from "react-router-dom";
import { changeFilter } from "../slices/filterSlice";
import { useDispatch } from "react-redux";

const InnerPage = () => {
  const [data] = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter("")); //Reset Filter when moving to InnerPage
  }, []);

  return (
    <section className="p-5 px-10 min-h-[100vh]">
      <Back />
      <article className="md:flex gap-5 items-center justify-around mt-10">
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
