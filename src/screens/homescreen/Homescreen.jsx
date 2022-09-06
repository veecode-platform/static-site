import style from "../../../styles/_Homescreen.module.scss";
import { Header } from '../../components';
import FirstSection from "./firstSection";
// import Benefits from "./benefits";
// import OptimizationAndSupport from "./optimizationAndSupport";
// import ContactSection from "./contactSection";
import dynamic from "next/dynamic";
const Benefits = dynamic (()=> import ('./benefits'));
const OptimizationAndSupport = dynamic (()=> import ('./optimizationAndSupport'));
const ContactSection = dynamic (()=> import ('./contactSection'));

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