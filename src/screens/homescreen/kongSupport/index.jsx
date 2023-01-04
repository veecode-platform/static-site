import dynamic from 'next/dynamic'
import style from './Kong.module.scss'
import Data from './kong.json'

const Card = dynamic(()=> import('./card'));

const Kong = () => {
  return (
    <section className={style.wrapper}>
      <div className={style.title}>
        <h2>Kong Gateway<span> Support</span></h2>
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