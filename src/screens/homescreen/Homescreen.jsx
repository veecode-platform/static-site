import style from '../../../styles/Homescreen.module.scss';
import { Footer, Header, WhatsApp } from '../../components';
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
      <Header fixedHeader showButton showOptions/>
      <OptimizeYourBusiness /> 
      <ToolsDetails/> 
      <FirstSection /> 
      <SupportSection />
      <Tools/> 

      {/* <Benefits />  */}
      {/* <Banner />  */}
      <WhatsApp />
      <Footer />
    </main>
  );
}

export default Homescreen