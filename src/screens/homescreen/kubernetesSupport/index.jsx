import dynamic from 'next/dynamic'
import style from './Kubernetes.module.scss'
import Data from './kubernetes.json'

const Card = dynamic(()=> import('./card'));
// const kongLogo = "assets/home/tools/KONG.png"; 

const Kubernetes = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.title}>
      {/* <img
            src={KubernetesLogo}
            alt="background header - Desktop Version"
            /> */}
        <h2>Kubernetes <span>Support</span></h2>
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