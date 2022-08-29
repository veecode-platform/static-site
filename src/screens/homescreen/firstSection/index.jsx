import style from './_FirstSection.module.scss';
import { Button } from '../../../components';

const Logo = 'assets/home/logo.png';

const FirstSection = () => {
  return (
    <section className={style.wrapper}>
        <article className={style.content}>
            <img
               src={Logo}
               alt="Veecode plataform Logo"
               className={style.content__logo}
                />
            <div className={style.content__title}>
                <h1>Create your API in 
                     <strong> minutes </strong> 
                     and <strong>free</strong></h1>
            </div>
            <div className={style.content__text}>
                <p>
                No more wasting time preparing the environment
                from development to building your APIs
                and create your project template in minutes
                from a spec.
                </p>
            </div>
            <div className={style.content__buttons}>
                <Button>Get start</Button>
                <Button>Download now</Button>
            </div>
        </article>
    </section>
  )
}

export default FirstSection