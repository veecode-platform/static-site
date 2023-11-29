import style from '../../../styles/Homescreen.module.scss';
import { ChatBot, Footer, Header } from '../../components';
import OptimizeYourBusiness from './optimizesYourBusiness';
import SupportSection from './supportSection';
import ToolsDetails from './toolsDetails';
import '../../i18n';

const Homescreen = () => {
  return (
    <>
      <ChatBot />
      <main className={style.container}>
        <Header
          fixedHeader
          showButton
          showOptions
        />
        <OptimizeYourBusiness />
        <ToolsDetails />
        <SupportSection />
        <Footer />
      </main>
    </>
  );
}

export default Homescreen