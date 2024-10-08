import { FaLongArrowAltLeft } from "react-icons/fa";
import style from "../../../styles/DefaultPage.module.scss";
import { Header, Footer } from "../../components";
import { useRouter } from 'next/router'
import classNames from "classnames";

const DefaultPage = ({titleBar,title, subtitle, children, noPrevious, noBack, noFooter, showButton, showOptions, notTranslate, backToUrl,noSpace}) => {
  const router = useRouter();
  const HandlerBack = () => {
       if(backToUrl){
        router.push(backToUrl)
       }else{
        noPrevious ? router.push("/") : router.back();
       }
  }
  return (
    <main className={style.wrapper}>
      <Header showButton={showButton} showOptions={showOptions} notTranslate={notTranslate? true : false }/>
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
        <article className={
          classNames({
            [style.contentWrapper]: true,
            [style.contentWrapper__spaces] : !noSpace
          })
        }>
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
      {!noFooter && <Footer/>}
    </main>
  );
};

export default DefaultPage;
