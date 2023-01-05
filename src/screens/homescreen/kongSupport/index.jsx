import dynamic from 'next/dynamic'
import style from './Kong.module.scss'
import Data from './kong.json'

const Card = dynamic(()=> import('./card'));
const kongLogo = "assets/home/text_slide/kong.png"; 

const Kong = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div>
          <img 
            className={style.container__logo}
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
          <Card key={item.id} {...item} />
        ))}
      </article>
    </section> 
  );
}

export default Kong