import style from '../../../styles/_Homescreen.module.scss';
import { Footer, Header } from '../../components';
import FirstSection from './firstSection';
import Benefits from './benefits';
import OptimizeYourBusiness from './optimizesYourBusiness';
import OptimizationAndSupport from './optimizationAndSupport';
import SupportSection from './supportSection';
import Banner from './banner';


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
      <Footer/>
    </main>
  )
}

export default Homescreen