import style from '../../../styles/_Homescreen.module.scss';
import { Footer, Header } from '../../components';
import FirstSection from './firstSection';
import dynamic from 'next/dynamic';

const Benefits = dynamic(()=>import('./benefits'));
const OptimizeYourBusiness = dynamic(()=>import('./optimizesYourBusiness'));
const OptimizationAndSupport = dynamic(()=>import('./optimizationAndSupport'));
const SupportSection = dynamic(()=>import('./supportSection'));
const Banner = dynamic(()=>import('./banner'));


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