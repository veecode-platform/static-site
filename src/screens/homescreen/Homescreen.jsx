import style from '../../../styles/Homescreen.module.scss';
import { Footer, Header } from '../../components';
import FirstSection from './firstSection';
import OptimizeYourBusiness from './optimizesYourBusiness';
import OptimizationAndSupport from './optimizationAndSupport';
import Benefits from './benefits';
import Banner from './banner';
import SupportSection from './supportSection';
import Tools from './tools';
import ToolsDetails from './toolsDetails';

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header fixedHeader showButton />
      <FirstSection />
      <OptimizeYourBusiness />
      <ToolsDetails/>
      <Tools/>
      {/* <OptimizationAndSupport /> */}
      <Benefits />
      <Banner />
      <SupportSection />
      <Footer />
    </main>
  );
}

export default Homescreen