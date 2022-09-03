import Link from 'next/link';
import style from '../../../styles/_Plans.module.scss';
import { Breadcrumb, Button, Footer, Header } from '../../components';
import CardSupport from './cardSupport';

const Icon1 = 'assets/home/icon4.png';
const Icon2 = 'assets/home/icon5.png';

const Plans = () => {
  return (
    <main>
      <Link href="/">
        <a>
          <Header/>
        </a>
      </Link>
        <section className={style.wrapper}>
          <article className={style.content}>
              <div className={style.content__title}>
                  <h2>A Team Of Experts You Can Count On</h2>
              </div>
              <div className={style.content__desc}>
                  <p>Count on our team to help you get the most out of our platform</p>
              </div>
              {/* Breadcrumb */}
              <Breadcrumb
               active={1}
               />
              <div className={style.content__options}>
                  <CardSupport
                    image={Icon1}
                    title="Standard Support"
                    subtitle="10 Users"
                    desc="Support within 5 business days"
                    price="FREE"
                    >
                      <Button>
                        START NOW
                      </Button>
                    </CardSupport>
                  <CardSupport
                    image={Icon2}
                    title="Premium Support"
                    subtitle="20 Users"
                    desc="Support within 3 business days"
                    price="$ 100"
                    >
                      <Button>
                        BUY NOW
                      </Button>
                  </CardSupport>
              </div>
          </article>
      </section>
      <Footer/>
    </main>
  )
}

export default Plans