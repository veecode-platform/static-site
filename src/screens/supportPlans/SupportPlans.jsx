import React from "react";
import style from "../../../styles/SupportPlans.module.scss";
import SupportSection from "./supportSection";
import data from "./data.json";
import FirstSection from "./firstSection";
import FooterSection from "./footer";
import HeaderSection from "./header";
import Trial from "./trial";
import { WhatsApp } from "../../components";

const SupportPlans = () => {
  return (
    <main className={style.wrapper}>
      <HeaderSection showButton/>
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
      <Trial />
      <WhatsApp />
      <FooterSection />
    </main>
  );
};

export default SupportPlans;
