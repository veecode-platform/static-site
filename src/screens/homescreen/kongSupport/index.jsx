/* eslint-disable @next/next/no-img-element */
// import dynamic from 'next/dynamic'
import style from './Kong.module.scss'
import Data from './kong.json'
import Link from 'next/link';
import Button from '../../../components/button/Button.jsx';
// const Card = dynamic(()=> import('./card'));
import { CardElement } from '../../../components';
const kongLogo = "assets/home/text_slide/kong.png"; 

const Kong = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.container__logo}>
          <img 
            src={kongLogo}
            alt="Kong Gateway Support Logo - Desktop Version"
          />
        </div>
        <div className={style.container__title}>
          <h2>Kong Gateway<span> Support</span></h2>
        </div>
      </div>
      
      <article className={style.content}>
        {Data.map((item) => (
          <CardElement key={item.id} title={item.title} items={item.items}/>
        ))}
      </article>
      <div className={style.content__button}>
        <Link href="/compare-plans" prefetch={false}>
          <a>
            <Button>Check the Plans</Button>
          </a>
        </Link>
      </div>
    </section> 
  );
}

export default Kong