import React from "react";
import style from "../../../styles/SupportPlans.module.scss";
import SupportSection from "./supportSection";
import data from "./data.json";
import { Footer, Header } from "../../components";
import Plans from "./plans";

const SupportPlans = () => {
  return (
    <main className={style.wrapper}>
      <Header fixedHeader showButton />
      {/* FIRST SECTION */}
      {data.map((item) => {
        return (
          <SupportSection
            key={item.title}
            title={item.title}
            img={item.img}
            data={item.data}
            buttonLabel={item.buttonLabel}
            buttonLink={item.buttonLink}
          />
        );
      })}
      <Plans />
      <Footer />
    </main>
  );
};

export default SupportPlans;
