import style from "../../../styles/Footer.module.scss";

const Logo = "assets/home/logo2.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* <section className={style.content}> */}
        {/* <div className={style.content__logo}>
          <img src={Logo} alt="Veecode Plataform" />
        </div> */}
        {/* <div className={style.content__details}>
          <div className={style["content__details-lists"]}>
            <ul>
              <li>
                <span>About</span>
              </li>
              <li>docs</li>
              <li>terms of use</li>
              <li>contact</li>
            </ul>
            <ul>
              <li>
                <span>More</span>
              </li>
              <li>Github</li>
              <li>Plans</li>
            </ul>
          </div>
        </div> */}
      {/* </section> */}

      <div className={style.footer__copy}>
        <p>
          Copyright &copy; {new Date().getFullYear()} Veecode Plataform. All
          rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
