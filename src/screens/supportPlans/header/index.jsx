/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from './Header.module.scss';
import Button from '../../../components/button/Button';
import { useTranslation } from 'react-i18next';

const Logo = '/assets/logo/logo.png';

const HeaderSection = ({ fixedHeader, showButton }) => {
  const { t } = useTranslation();

  return (
    <header
      className={
        classNames({
          [style.wrapper]: true,
          [style.wrapper__fixedHeader]: fixedHeader
        })}
    >
      <section className={style.content}>
        <div>
          <Link href="#firstsec">
            <a>
              <img
                src={Logo}
                alt="VeeCode Plataform Logo"
                className={style.content__logo}
              />
            </a>
          </Link>
        </div>
        <div className={style.nav}>
          {showOptions && <div className={style.nav__options}>
            <Link href='https://docs.platform.vee.codes/'>
              <a>
                <h2>Docs</h2>
              </a>
            </Link>
          </div>}
          {showButton && <div className={style.nav__buyButton} >
            <Link href="#trial" passHref>
              <a>
                <Button headerButton>{t('Free Trial')}</Button>
              </a>
            </Link>
          </div>}
        </div>
      </section>
    </header>
  );
}

export default HeaderSection