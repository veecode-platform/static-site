/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from './Header.module.scss';
import Button from '../../../components/button/Button';

const Logo = '/assets/logo/logo.png';

const HeaderSection = ({ fixedHeader, showButton }) => {

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
                <h2>Início</h2>
              </a>
            </Link>
          </div>

          {showButton && <div className={style.nav__buyButton} >
            <Link href="/compare-plans" passHref>
              <a>
                <Button headerButton>Contrate</Button>
              </a>
            </Link>
          </div>}
        </div>
      </section>
    </header>
  );
}

export default HeaderSection