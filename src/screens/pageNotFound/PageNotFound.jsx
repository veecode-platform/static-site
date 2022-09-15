import { DefaultPage } from "../../components";
import style from "../../../styles/_PageNotFound.module.scss";
import Image from "next/image";

const ImageNotFound = "/assets/notFound/404.png";

const PageNotFound = () => {
  return (
    <DefaultPage
        titleBar="disable"
        noPrevious
        >
      <article className={style.wrapper}>
        <div className={style.image}>
          <Image
            layout="responsive"
            src={ImageNotFound} 
            alt="Page Not Found Image"
            width='100%'
            height='100%'
            unoptimized
            priority={true}
             />
        </div>
      </article>
    </DefaultPage>
  );
};

export default PageNotFound;
