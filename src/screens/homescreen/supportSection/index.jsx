import Link from 'next/link';
import { Button } from '../../../components';
import style from './_SupportSection.module.scss'

const SupportSection = () => {
  return (
    <section className={style.wrapper}>
      <article className={style.content}>
        <div className={style.content__text}>
          <div className={style["content__text-title"]}>
            <h2>
              <span>Unlock</span>
              <br />
              your team&apos;s potential
            </h2>
          </div>
          <div className={style["content__text-desc"]}>
            <strong>Benefits of VeeCode Platform support</strong>
            <ul className={style.list}>
              <li>Submit your questions through our portal</li>
              <li>Track the progress of your request</li>
              <li>Access our knowledge base</li>
              <li>Service with established SLA</li>
              <li>Direct assistance to your technical team</li>
            </ul>
          </div>
          <div className={style["content__text-buttonWrapper"]}>
            <Link href="/pricing" prefetch={false}>
              <a>
                <Button>
                  BUY NOW
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SupportSection 