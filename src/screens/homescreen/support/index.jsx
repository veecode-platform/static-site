import CardSupport from './cardSupport'
import style from './_Support.module.scss'

const Icon1 = 'assets/home/icon4.png';
const Icon2 = 'assets/home/icon5.png';

const Support = () => {
  return (
    <section className={style.wrapper}>
        <article className={style.content}>
            <div className={style.content__title}>
                <h2>A Team Of Experts You Can Count On</h2>
            </div>
            <div className={style.content__desc}>
                 <p>Count on our team to help you get the most out of our platform</p>
            </div>
            <div className={style.content__options}>
                <CardSupport
                  image={Icon1}
                  title="Standard Support"
                  subtitle="10 Users"
                  desc="Support within 5 business days"
                  />
                <CardSupport
                  image={Icon2}
                  title="Premium Support"
                  subtitle="20 Users"
                  desc="Support within 3 business days"
                  />
            </div>
        </article>
    </section>
  )
}

export default Support