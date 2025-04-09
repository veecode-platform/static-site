'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
  RiTwitterXFill,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiYoutubeFill,
  RiDiscordFill,
  // RiFacebookBoxFill,
} from 'react-icons/ri';
import {
  ExternalLink, NavigationLink, Container, 
} from '@/components';
import { gtagEvents } from '@/utils/helpers/gtag';
import style from './FooterStyles.module.scss';

const Logo = '/assets/logo/logo.png';

export const Footer = () => {
  const t = useTranslations('footer');
  const a = useTranslations('accessibility');

  return (
    <footer className={style.footer}>
      <Container>
        <section className={style.content}>
          <div className={style.content__logoAndSocial}>
            <Image
              src={Logo}
              width={228}
              height={71}
              alt="Veecode Plataform"
              style={{
                height: 'auto',
              }}
              unoptimized
              className={style.logo}
            />
            <ul className={style.items}>
              {/* <li>
                <ExternalLink
                  description={a("external-links.instagram")}
                  href="https://web.facebook.com/veecodeplatform/"
                >
                  <RiFacebookBoxFill />
                </ExternalLink>
              </li> */}
              <li>
                <ExternalLink
                  description={a('external-links.instagram')}
                  href="https://www.instagram.com/veecodeplatform/"
                >
                  <RiInstagramLine />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a('external-links.linkedin')}
                  href="https://www.linkedin.com/showcase/veecode-platform/"
                >
                  <RiLinkedinBoxFill />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a('external-links.x')}
                  href="https://twitter.com/veecodeplatform"
                >
                  <RiTwitterXFill />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a('external-links.discord')}
                  href="https://discord.gg/pREwxeVzAD"
                >
                  <RiDiscordFill />
                </ExternalLink>
              </li>
              <li>
                <ExternalLink
                  description={a('external-links.youtube')}
                  href="https://www.youtube.com/@veecodeplatform-br"
                >
                  <RiYoutubeFill />
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div className={style.content__details}>
            <div className={style['content__details-lists']}>
              <ul>
                <li>
                  <span>{t('about-title')}</span>
                </li>
                <li>
                  <NavigationLink href="/how-it-works">
                    {t('about-option1')}
                  </NavigationLink>
                </li>

                <li>
                  <NavigationLink href="/support">
                    {t('about-option2')}
                  </NavigationLink>
                </li>

                <li onClick={() => gtagEvents('joinUs')}>
                  <ExternalLink
                    description={a('external-links.github')}
                    href="https://github.com/vfipaas/safira-support/discussions"
                  >
                    {t('about-option3')}
                  </ExternalLink>{' '}
                </li>
              </ul>
              <ul>
                <li>
                  <span>{t('docs-title')}</span>
                </li>
                {/* <ExternalLink href="https://docs.platform.vee.codes/safira-cli/intro">
                  <li onClick={() => gtagEvents("safiraDocs")}>
                    {t("docs-option1")}
                  </li>
                </ExternalLink> */}

                <li onClick={() => gtagEvents('vkdrDocs')}>
                  <ExternalLink
                    description={a('external-links.vkdr')}
                    href="https://docs.platform.vee.codes/vkdr/intro/"
                  >
                    {t('docs-option2')}
                  </ExternalLink>
                </li>

                <li onClick={() => gtagEvents('devportal')}>
                  <ExternalLink
                    description={a('external-links.docs')}
                    href="https://docs.platform.vee.codes/devportal/intro/"
                  >
                    {t('docs-option3')}
                  </ExternalLink>
                </li>
              </ul>
              <ul>
                <li>
                  <span>{t('more-title')}</span>
                </li>

                <li>
                  <ExternalLink
                    description={a('external-links.blog')}
                    href="https://blog.platform.vee.codes/"
                  >
                    {t('more-option1')}
                  </ExternalLink>
                </li>

                <li>
                  <NavigationLink href="/terms-of-service">
                    {t('more-option2')}{' '}
                  </NavigationLink>
                </li>

                <li>
                  <NavigationLink href="/privacy-policy">
                    {t('more-option3')}
                  </NavigationLink>
                </li>

                <li>
                  <NavigationLink href="/contact-us">
                    {t('more-option4')}
                  </NavigationLink>
                </li>

                <li>
                  {' '}
                  <NavigationLink href="/faq">
                    {t('more-option5')}
                  </NavigationLink>
                </li>

                <li>
                  {' '}
                  <NavigationLink href="/plugins">
                    {t('more-option6')}{' '}
                  </NavigationLink>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className={style.footer__copy}>
          <p>
            Copyright &copy; {new Date().getFullYear()} {t('copyright')}
          </p>
        </section>
      </Container>
    </footer>
  );
};
