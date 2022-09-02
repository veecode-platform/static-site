import style from "../../../styles/_Homescreen.module.scss";
import { Footer, Header } from '../../components';
import FirstSection from "./firstSection";
import Benefits from "./benefits";
import OptimizationAndSupport from "./optimizationAndSupport";
import ContactSection from "./contactSection";

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header/>
      <FirstSection/>
      <Benefits/>
      <OptimizationAndSupport/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}

export default Homescreen