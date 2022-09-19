import Link from 'next/link';
import style from '../../../styles/Header.module.scss';

const Logo = '../assets/home/logo.png';

const Header = () => {
  return (
    <header className={style.wrapper}>
      <section className={style.content}>
        <Link href="/">
          <a>
            <img
              src={Logo}
              alt="VeeCode Plataform Logo"
              className={style.content__logo}
            />
          </a>
        </Link>
      </section>
    </header>
  );
}

export default Header