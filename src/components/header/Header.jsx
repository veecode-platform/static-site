/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';
// import { useTranslation } from 'react-i18next';


const Logo = '/assets/logo/logo.png';

const Header = ({ fixedHeader, showButton }) => {
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
          <div className={style.nav__options}>
            <Link href='/'>
              <a>
                <h2>Home</h2>
              </a>
            </Link>
          </div>
          <div className={style.nav__options}>
            <Link href='/support-plans'>
              <a>
                <h2>Plans</h2>
              </a>
            </Link>
          </div>

          {showButton && <div className={style.nav__buyButton} >
            <Link href="/compare-plans" passHref>
              <a>
                <Button headerButton>Buy Now</Button>
              </a>
            </Link>
          </div>}
        </div>
      </section>
    </header>
  );
}

export default Header