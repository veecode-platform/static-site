import Image from 'next/image';
import {
  Button, Container, NavigationLink, 
} from '@/components';
import style from './SupportSection.module.scss';
import { SupportSectionProps } from './types';

const BannerDesktop = `${process.env.NEXT_PUBLIC_BASE_PATH}/assets/home/bg3.webp`;

export const SupportSection: React.FC<SupportSectionProps> = ({
  title,
  buttonLabel,
  supportItems,
}) => {
  return (
    <section className={style.root}>
      {/* Banner Desktop */}
      <Image
        alt=""
        src={BannerDesktop}
        width={500}
        height={500}
        sizes="100vw"
        priority
        unoptimized
        className={style.bannerDesktop}
      />
      <Container>
        <article className={style.content}>
          <div className={style.content__text}>
            <div className={style['content__text-title']}>
              <h2>{title}</h2>
              <div className={style['content__text-buttonWrapper']}>
                <NavigationLink href="/pricing/#plans" prefetch={false}>
                  <Button aria-label={buttonLabel}>{buttonLabel}</Button>
                </NavigationLink>
              </div>
            </div>

            <div className={style.content__cardsSection}>
              <div className={style['content__cardsSection-cards']}>
                {supportItems.map(item => (
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
                    <div className={style.card__desc}>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
};
