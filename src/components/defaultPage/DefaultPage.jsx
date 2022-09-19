import { FaLongArrowAltLeft } from "react-icons/fa";
import style from "../../../styles/DefaultPage.module.scss";
import { Header, Footer } from "../../components";
import { useRouter } from 'next/router'

const DefaultPage = ({title, subtitle, titleBar, children, noPrevious, noBack}) => {
  const router = useRouter();
  const HandlerBack = () => {
       noPrevious ? router.push("/") : router.back();
  }
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
            { children }
        </article>
      </section>
      {!noBack &&
        <section className={style.back}>
          <a onClick={HandlerBack}>
            <FaLongArrowAltLeft/>
          </a>
        </section>
      }      
      <Footer/>
    </main>
  );
};

export default DefaultPage;
