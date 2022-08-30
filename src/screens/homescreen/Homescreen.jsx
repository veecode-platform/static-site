import style from "../../../styles/_Homescreen.module.scss";
import { Header } from '../../components';
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
    </main>
  )
}

export default Homescreen