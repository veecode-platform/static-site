import dynamic from 'next/dynamic'
import style from './Benefits.module.scss'
import Data from './benefits.json'
import Divider from './divider';
import { useTranslation } from 'react-i18next';

const Card = dynamic(()=> import('./card'));

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className={style.wrapper}>
      <Divider/>
      <div className={style.title}>
        <h2>What`&apos;`s missing from <span>your team</span>?</h2>
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