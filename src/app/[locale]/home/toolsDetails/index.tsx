import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components';
import style from './ToolsDetails.module.scss';
import { toolsDetailsProps } from './types';

const Banner = `/assets/home/bglight.webp`;

export const ToolsDetails: React.FC<toolsDetailsProps> = ({
  title,
  tools,
  subtitle,
  buttonLabel,
}) => {
  return (
    <section className={style.content}>
      <Image
        alt=""
        src={Banner}
        width={500}
        height={500}
        sizes="100vw"
        priority
        unoptimized
        className={style.banner}
      />
      <Container>
        <article className={style.wrapper}>
          <div className={style.wrapper_title}>
            <h2>{title}</h2>
          </div>

          <div className={style.wrapper_cardsWrapper}>
            <div className={style['wrapper_cardsWrapper-cards']}>
              {tools.map(item => (
                <div key={item.id} className={style.card}>
                  <div className={style.card__icon}>
                    <Image
                      src={item.icon}
                      alt=""
                      width={80}
                      height={80}
                      priority
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      unoptimized
                    />
                  </div>
                  <div className={style.card__text}>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={style['wrapper_cardsWrapper-subtitle']}>
            <p>{subtitle}</p>
            <Link
              href="https://docs.platform.vee.codes/devportal/intro"
              target="_blank"
              prefetch={false}
            >
              <button aria-label={buttonLabel} className={style.button}>
                {buttonLabel}
              </button>
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
};
