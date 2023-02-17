import React from "react";
import style from "../../../styles/SupportPlans.module.scss";
import SupportSection from "./supportSection";
import data from "./data.json";
import { Footer, Header, Tools } from "../../components";
import Plans from "./plans";
import FirstSection from "./firstSection";
import FooterSection from "./footer";

const SupportPlans = () => {
  return (
    <main className={style.wrapper}>
      <Header showButton/>
      <FirstSection />
      <section className={style.stacks}>
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
      </section>
      <Plans />
      {/* <Tools bg="#131313"/> */}
      <FooterSection />
    </main>
  );
};

export default SupportPlans;
