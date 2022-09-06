import Link from 'next/link';
import style from '../../../styles/_Support.module.scss';
import { Breadcrumb, Button, Header } from '../../components';
import CardSupport from './cardSupport';

const Support = () => {
  return (
    <main className={style.wrapper}>
      <Header/>
          <section className={style.content}>
              <div className={style.content__title}>
                  <h2>A Team Of Experts You Can Count On</h2>
              </div>
              <div className={style.content__desc}>
                  <p>Count on our team to help you get the most out of our platform</p>
              </div>
              <Breadcrumb
               active={1}
               />
              <div className={style.content__options}>
                  <CardSupport
                    title="Standard Support"
                    subtitle="10 Users"
                    desc="Support within 5 business days"
                    price="$ 0"
                    >
                      <Link href="/checkout">
                        <a>
                        <Button>
                          START NOW
                        </Button>
                        </a>                     
                      </Link>
                      
                    </CardSupport>
                  <CardSupport
                    title="Premium Support"
                    subtitle="20 Users"
                    desc="Support within 3 business days"
                    price="$ 100"
                    >
                      <Link href="/checkout">
                        <a>
                        <Button>
                          BUY NOW
                        </Button>
                        </a>                     
                      </Link>
                  </CardSupport>
              </div>
          </section>
    </main>
  )
}

export default Support