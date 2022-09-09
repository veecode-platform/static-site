import style from "../../../styles/_Homescreen.module.scss";
import { Header } from '../../components';
import FirstSection from "./firstSection";
// import Benefits from "./benefits";
// import OptimizationAndSupport from "./optimizationAndSupport";
// import ContactSection from "./contactSection";
import dynamic from "next/dynamic";
import Banner from "./banner";

const OptimizeYourBusiness = dynamic (()=> import ('./optimizesYourBusiness'));
const Benefits = dynamic (()=> import ('./benefits'));
const OptimizationAndSupport = dynamic (()=> import ('./optimizationAndSupport'));
const SupportSection = dynamic (()=> import ('./supportSection'));


const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header/>
      <FirstSection/>
      <OptimizeYourBusiness/>
      <OptimizationAndSupport/>
      <Benefits/>
      <Banner/>
      <SupportSection/>
    </main>
  )
}

export default Homescreen