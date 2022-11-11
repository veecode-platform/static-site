import dynamic from 'next/dynamic'
import style from './Benefits.module.scss'
import Data from './benefits.json'
import Divider from './divider';

const Card = dynamic(()=> import('./card'));

const Benefits = () => {
  return (
    <section className={style.wrapper}>
      <Divider/>
      <div className={style.title}>
        <h2>What&apos;s missing from <span>your team</span>?</h2>
      </div>
      <article className={style.content}>
        {Data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </article>
    </section>
  );
}

export default Benefits