import React, { useEffect } from "react";
import Back from "../components/Back";
import View from "../components/View";
import Infos from "../components/Infos";
import Borderlands from "../components/Borderlands";
import { useLoaderData } from "react-router-dom";
import { changeFilter } from "../slices/filterSlice";
import { useDispatch } from "react-redux";
import ErrorPage from "./ErrorPage";

const InnerPage = () => {
  window.scrollTo(0, 0);
  let data;

  try {
    [data] = useLoaderData();
  } catch (error) {
    console.log("This page does not exist!");
    return <ErrorPage />;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilter("")); //Reset Filter when moving to InnerPage
  }, []);

  return (
    <section className="p-5 px-10 min-h-[100vh] text-[16px] lg:px-20 xl:px-40 2xl:px-60">
      <Back />
      <article className="md:flex gap-10 items-center justify-between mt-20">
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
