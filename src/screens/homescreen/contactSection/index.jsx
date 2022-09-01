import { Button } from '../../../components';
import style from './_ContactSection.module.scss'

const ContactSection = () => {
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
              <li>Submit your solutions through our portal</li>
              <li>
                Track the progress of your request from our support portal
              </li>
              <li>Access our knowledge base</li>
              <li>Service with established SLA</li>
              <li>Assistance to your technical team</li>
            </ul>
          </div>
          <div className={style["content__text-buttonWrapper"]}>
            <Button>Contact Us</Button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ContactSection 