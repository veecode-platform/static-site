import style from "../../../styles/_PageDefault.module.scss";
import { Header } from '../../components';
import FirstSection from "./firstSection";
import Benefits from "./benefits";

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header/>
      <FirstSection/>
      <Benefits/>
    </main>
  )
}

export default Homescreen