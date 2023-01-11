import style from './Kubernetes.module.scss'
import Data from './kubernetes.json'
import Link from 'next/link';
import Button from '../../../components/button/Button.jsx';
import { SupportCards } from '../../../components';

const kubernetesLogo = "assets/home/text_slide/kubernetes.png";

const Kubernetes = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.container__logo}>
          <img
            src={kubernetesLogo}
            alt="Kubernetes Support Logo - Desktop Version"
          />
        </div>
        <div className={style.container__title}>
          <h2>
            Kubernetes <span>Support</span>
          </h2>
        </div>
      </div>
      <article className={style.cards}>
        <SupportCards 
          data={Data}
          />
      </article>
      <div className={style.button}>
        <Link
         href="#plans"
         prefetch={false}>
          <a>
            <Button>Check Plans</Button>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Kubernetes;
