import style from "./PageNotFoundStyles.module.scss";
import Link from "next/link";
import { GoHome } from "react-icons/go";

const ImageNotFound = "/assets/notFound/404.png";

export const PageNotFound = () => {
  return (
    <article className={style.root}>
      <div className={style.content}>
        <img src={ImageNotFound} alt="Page Not Found Image" />
        <div className={style.content__goBack}>
          <Link href="/en/">
            <GoHome title="Home" />
          </Link>
        </div>
      </div>
    </article>
  );
};
