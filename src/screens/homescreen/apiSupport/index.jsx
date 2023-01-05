import dynamic from 'next/dynamic'
import style from './apiDevelopment.module.scss'
import Data from './apiDevelopment.json'

const Card = dynamic(()=> import('./card'));
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
      <article className={style.content}>
        {Data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </article>
    </section> 
  );
}

export default ApiSupport