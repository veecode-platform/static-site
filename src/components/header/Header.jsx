/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';
// import { useTranslation } from 'react-i18next';


const Logo = '/assets/logo/logo.png';

const Header = ({ fixedHeader, showButton, showOptions }) => {
  // const { t } = useTranslation();

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
          <Link href="/">
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
          {showOptions && <div className={style.nav__options}>
            <Link href='/compare-plans'>
              <a>
                <h2>Pricing</h2>
              </a>
            </Link>
          </div>}
          {showOptions && <div className={style.nav__options}>
            <Link href='/contact-us'>
              <a>
                <h2>Contact Us</h2>
              </a>
            </Link>
          </div>}

          {showButton && <div className={style.nav__buyButton} >
            <Link href="/trial" passHref>
              <a>
                <Button headerButton>Free Trial</Button>
              </a>
            </Link>
          </div>}
        </div>
      </section>
    </header>
  );
}

export default Header