import Image from 'next/image';
import {
  Button, Container, ExternalLink, 
} from '@/components';
import style from './TransformTeamSection.module.scss';
import type { TransformTeamSectionProps } from './type';

const ComputerImg = `/assets/home/notebook.svg`;
const BannerMobile = `/assets/home/banner-mobile.webp`;
const BannerDesktop = `/assets/home/banner.webp`;

export const TransformTeamSection: React.FC<TransformTeamSectionProps> = ({
  title,
  description,
  linkLabel,
  buttonLabel,
}) => {
  return (
    <section className={style.root}>
      {/* Banner Mobile */}
      <Image
        alt=""
        src={BannerMobile}
        width={500}
        height={500}
        sizes="100vw"
        priority
        unoptimized
        className={style.bannerMobile}
      />
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
        <section className={style.content}>
          <div className={style.textContent}>
            <div className={style.textContent__title}>
              <h2>{title}</h2>
            </div>
            <div className={style.textContent__description}>
              <p>{description}</p>
            </div>
            <div className={style.textContent__buttonGroup}>
              <ExternalLink
                description={linkLabel}
                href="https://docs.platform.vee.codes/devportal/installation-guide/VKDR/"
              >
                <Button aria-label={buttonLabel}>{buttonLabel}</Button>
              </ExternalLink>
            </div>
          </div>
          <div className={style.imageWrapper}>
            <div className={style.image}>
              <Image
                src={ComputerImg}
                alt="Computer Logo"
                width={500}
                height={500}
                priority
                unoptimized
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};
