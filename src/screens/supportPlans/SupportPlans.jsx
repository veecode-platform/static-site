import React from "react";
import style from "../../../styles/SupportPlans.module.scss";
import SupportSection from "./supportSection";
import data from "./data.json";
import FirstSection from "./firstSection";
import Trial from "./trial";
import { ChatBot, Footer, Header } from "../../components";
import i18n from 'i18next';

const SupportPlans = () => {

  let items = [];
  i18n.language == 'pt' ? items = data.pt : items = data.en;
  
  return (
    <main className={style.wrapper}>
      <Header showOptions fixedHeader></Header>
      <FirstSection />
      <section className={style.stacks}>
      {items.map((item) => {
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
      <ChatBot/>
      <Footer />
    </main>
  );
};

export default SupportPlans;
