import style from './Kubernetes.module.scss';
import Data from './kubernetes.json';
import Card from '../kongSupport/card/index.jsx';
const kubernetesLogo = "assets/home/text_slide/kubernetes.png"; 
import Link from 'next/link';
import Button from '../../../components/button/Button.jsx';
const Kubernetes = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div>
          <img 
            className={style.container__logo}
            src={kubernetesLogo}
            alt="Kubernetes Support Logo - Desktop Version"
          />
        </div>
        <div className={style.container__title}>
          <h2>Kubernetes <span>Support</span></h2>
        </div>
      </div>
      <article className={style.content}>
        {Data.map((item) => (
          <Card key={item.id} {...item} />
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

export default Kubernetes