/* eslint-disable @next/next/no-img-element */
import style from './AwsSupport.module.scss'
import Data from './awsSupport.json'
import Link from 'next/link';
import Button from '../../../components/button/Button.jsx';
import { CardElement } from '../../../components';
const awsLogo = "assets/home/text_slide/aws.png"; 

const AwsSupport = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div 
         className={style.container__logo}
         >
          <img 
            src={awsLogo}
            alt="AWS Support Logo - Desktop Version"
          />
        </div>
        <div className={style.container__title}>
          <h2>AWS <span>Support</span></h2>
        </div>
      </div>
      <article className={style.content}>
        {Data.map((item) => (
          <CardElement 
           key={item.id}
           title={item.title}
           items={item.items}
            />
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

export default AwsSupport