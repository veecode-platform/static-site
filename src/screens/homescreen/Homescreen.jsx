import style from '../../../styles/Homescreen.module.scss';
import { Footer, Header } from '../../components';
import FirstSection from './firstSection';
import OptimizeYourBusiness from './optimizesYourBusiness';
import Benefits from './benefits';
import Banner from './banner';
import SupportSection from './supportSection';
import Tools from './tools';
import ToolsDetails from './toolsDetails';
import '../../i18n';

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header fixedHeader showButton/>
      <FirstSection />
      <OptimizeYourBusiness />
      <ToolsDetails/>
      <Tools/>
      <Benefits />
      <Banner />
      <SupportSection />
      <Footer />
    </main>
  );
}

export default Homescreen