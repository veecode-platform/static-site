import style from "../../../styles/_PageDefault.module.scss";
import { Header } from '../../components';
import FirstSection from "./firstSection";

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header/>
      <FirstSection/>
    </main>
  )
}

export default Homescreen