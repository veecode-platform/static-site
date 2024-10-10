"use client";

import { FaLongArrowAltLeft } from "react-icons/fa";
import style from "./DefaultPageStyles.module.scss";
import { Header, Footer, Container } from "../../components";
import { DefaultPageProps } from "./types";
import classNames from "classnames";
import { useRouter } from "@/i18n/routing";

export const DefaultPage: React.FC<DefaultPageProps> = ({
  titleBar,
  title,
  subtitle,
  children,
  noPrevious,
  noBack,
  noFooter,
  showButton,
  showOptions,
  notTranslate,
  backToUrl,
  noSpace,
}) => {
  const router = useRouter();

  const HandlerBack = () => {
    if (backToUrl) {
      router.push(backToUrl as any);
    } else {
      noPrevious ? router.push("/") : router.back();
    }
  };

  return (
    <>
      <Header
        showButton={showButton ? true : false}
        showOptions={showOptions ? true : false}
        notTranslate={notTranslate ? true : false}
      />
      <main className={style.root}>
        <section className={style.content}>
          {titleBar ? (
            <article className={style.titleWrapper}>
              <div className={style.titleWrapper__content}>
                {title !== "" ? (
                  <h1 className={style["titleWrapper__content-title"]}>
                    {title}
                  </h1>
                ) : (
                  ""
                )}
                {subtitle !== "" ? (
                  <h2 className={style["titleWrapper__content-subtitle"]}>
                    {subtitle}
                  </h2>
                ) : (
                  ""
                )}
              </div>
            </article>
          ) : (
            ""
          )}
          <Container>
            <article
              className={classNames({
                [style.contentWrapper]: true,
                [style.contentWrapper__spaces]: !noSpace,
              })}
            >
              {children}
            </article>
          </Container>
        </section>
        {!noBack && (
          <section className={style.back}>
            <span onClick={HandlerBack}>
              <FaLongArrowAltLeft />
            </span>
          </section>
        )}
      </main>
      {!noFooter && <Footer />}
    </>
  );
};
