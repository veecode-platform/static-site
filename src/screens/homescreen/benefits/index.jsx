import Card from './card'
import style from './_Benefits.module.scss'
import Data from './benefits.json'

const Benefits = () => {
  return (
    <section className={style.wrapper}>
      <article className={style.content}>
        {Data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </article>
    </section>
  );
}

export default Benefits