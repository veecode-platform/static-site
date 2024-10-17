import { Chatbot, Footer, Header } from "@/components";
import style from "./HomeStyles.module.scss";
import { TransformTeamSection } from "./transformTeamSection";
import { OptimizeYourBusiness } from "./optimizesYourBusiness";
import { ToolsDetails } from "./toolsDetails";
import { SupportSection } from "./supportSection";

export const Home = () => {
  return (
    <>
      <Header fixedHeader showButton showOptions />
      <Chatbot />
      <main className={style.content}>
        <TransformTeamSection />
        <OptimizeYourBusiness />
        <ToolsDetails />
        <SupportSection />
      </main>
      <Footer />
    </>
  );
};
