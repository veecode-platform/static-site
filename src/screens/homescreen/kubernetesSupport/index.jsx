import dynamic from 'next/dynamic'
import style from './Kubernetes.module.scss'
import Data from './kubernetes.json'

const Card = dynamic(()=> import('./card'));
const kubernetesLogo = "assets/home/text_slide/kubernetes.png"; 

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
    </section> 
  );
}

export default Kubernetes