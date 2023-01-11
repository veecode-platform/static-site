/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic'
import style from './apiDevelopment.module.scss'
import Data from './apiDevelopment.json'
import Link from 'next/link';
import Button from '../../../components/button/Button.jsx';
import { SupportCards } from '../../../components';
const apiDevelopmentLogo = "assets/home/text_slide/api.png"; 

const ApiSupport = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div>
          <img 
            className={style.container__logo}
            src={apiDevelopmentLogo}
            alt="Api Development Support Logo - Desktop Version"
          />
        </div>
        <div className={style.container__title}>
          <h2>Api Development <span>Support</span></h2>
        </div>
      </div>
      <article className={style.cards}>
        <SupportCards
         data={Data}
         />
      </article>
      <div className={style.content__button}>
        <Link href="#Plans" prefetch={false}>
          <a>
            <Button>Check Plans</Button>
          </a>
        </Link>
      </div>
    </section> 
  );
}

export default ApiSupport