import Link from 'next/link';
import style from '../../../styles/Header.module.scss';
import Button from '../button/Button';


const Logo = '../assets/home/logo.png';

const Header = ({fixedHeader, showButton}) => {
  return (
    <header className={style.wrapper} style={fixedHeader? {position: "fixed",top: "0"}:{}}>
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
          <Link href="/pricing" passHref>            
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