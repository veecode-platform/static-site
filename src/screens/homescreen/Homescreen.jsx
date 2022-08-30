import style from "../../../styles/_PageDefault.module.scss";
import { Header } from '../../components';
import FirstSection from "./firstSection";
import Benefits from "./benefits";
import OptimizationAndSupport from "./optimizationAndSupport";

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header/>
      <FirstSection/>
      <Benefits/>
      <OptimizationAndSupport/>
    </main>
  )
}

export default Homescreen