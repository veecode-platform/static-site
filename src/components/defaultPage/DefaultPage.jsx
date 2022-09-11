import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";
import style from "../../../styles/_DefaultPage.module.scss";
import { Header, Footer } from "../../components";

const DefaultPage = ({title, subtitle, titleBar, children}) => {
  return (
    <main className={style.wrapper}>
      <Header />
      <section className={style.content}>
        {
          titleBar === "enable" ? 
          (<article className={style.titleWrapper}>
              <div className={style.titleWrapper__content}>
                  {
                    title !== "" ? (
                      <h1 className={style["titleWrapper__content-title"]}>
                        {title}
                      </h1>
                    ) : ""
                  }
                  {
                    subtitle !== "" ? (
                      <h2 className={style["titleWrapper__content-subtitle"]}>
                        {subtitle}
                      </h2>
                    ) : ""
                  }                
              </div>
            </article>) 
           : ""
        }
        <article className={style.contentWrapper}>
            { children ==! null | children !== "" ? children : null}
        </article>
      </section>
      <section className={style.back}>
          <Link href="/" prefetch={false}>
            <a>
             <FaLongArrowAltLeft/>
            </a>
          </Link>
      </section>
      <Footer/>
    </main>
  );
};

export default DefaultPage;
