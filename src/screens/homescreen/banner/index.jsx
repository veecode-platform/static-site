import style from './_Banner.module.scss'

const Element1 = "assets/home/element1.png";
const Element2 = "assets/home/element2.png";

const Banner = () => {
  return (
          <section className={style.banner}>
          <article className={style.banner__container}>
            <div className={style.left}>
              <img src={Element1} alt="Element 1 picture" />
            </div>
            <div className={style.text}>
              <div className={style.text__title}>
                <h2>Count on our team of experts</h2>
              </div>
              <p>
                Our team will help you to be even more useful on our platform.
              </p>
            </div>
            <div className={style.right}>
              <img src={Element2} alt="Element 2 picture" />
            </div>
          </article>
        </section>
  )
}

export default Banner