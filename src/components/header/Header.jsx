/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';


const Logo = '../assets/home/logo.avif';

const Header = ({fixedHeader, showButton}) => {
  return (
    <header
      className={
      classNames({
                  [style.wrapper] : true ,
                  [style.wrapper__fixedHeader] : fixedHeader
                })}
       >
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
        {showButton && <div className={style.content__buyButton} >
          <Link href="/compare-plans" passHref>            
            <a>
              <Button headerButton>Buy Now</Button>
            </a>         
          </Link>
        </div>}
      </section>
    </header>
  );
}

export default Header