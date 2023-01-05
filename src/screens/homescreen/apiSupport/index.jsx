import dynamic from 'next/dynamic'
import style from './apiDevelopment.module.scss'
import Data from './apiDevelopment.json'

const Card = dynamic(()=> import('./card'));
// const kongLogo = "assets/home/tools/KONG.png"; 

const ApiSupport = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.title}>
      {/* <img
            src={ApiSupportLogo}
            alt="background header - Desktop Version"
            /> */}
        <h2>Api Development <span>Support</span></h2>
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