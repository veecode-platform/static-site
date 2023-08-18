import style from '../../../styles/Homescreen.module.scss';
import { Footer, Header, WhatsApp } from '../../components';
import OptimizeYourBusiness from './optimizesYourBusiness';
import SupportSection from './supportSection';
import Tools from './tools';
import ToolsDetails from './toolsDetails';
import '../../i18n';

const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header 
        fixedHeader
        showButton
        showOptions
       />
      <OptimizeYourBusiness /> 
      <ToolsDetails/> 
      <SupportSection />
      <Tools/> 
      {/* <FirstSection />  */}
      {/* <Benefits />  */}
      {/* <Banner />  */}
      <WhatsApp />
      <Footer />
    </main>
  );
}

export default Homescreen