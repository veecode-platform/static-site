import style from '../../../styles/Homescreen.module.scss';
import { Footer, Header } from '../../components';
import FirstSection from './firstSection';
// import OptimizeYourBusiness from './optimizesYourBusiness';
import Benefits from './benefits';
import Banner from './banner';
import Kong from './kongSupport';
import SupportSection from './supportSection';
import Tools from './tools';
import ToolsDetails from './toolsDetails';
import Kubernetes from './kubernetesSupport';
import ApiSupport from './apiSupport';
import AwsSupport from './awsSupport';
import Plans from './plans';
const Homescreen = () => {
  return (
    <main className={style.container}>
      <Header fixedHeader showButton />
      <FirstSection />
      <Kong />
      <ApiSupport />
      <Kubernetes />
      <AwsSupport />
      {/* <OptimizeYourBusiness /> */}
      <ToolsDetails/>
      <Tools/>
      <Plans />
      {/* <Benefits /> */}
      {/* <Banner /> */}
      {/* <SupportSection /> */}
      <Footer />
    </main>
  );
}

export default Homescreen