import { DefaultPage } from "@/components";
import style from "./PageNotFoundStyles.module.scss";
import Image from "next/image";

const ImageNotFound = "/assets/notFound/404.png";

export const PageNotFound = () => {
  return (
    <DefaultPage noPrevious showOptions>
      <article className={style.root}>
        <div className={style.image}>
          <Image
            src={ImageNotFound}
            alt="Page Not Found Image"
            width={100}
            height={100}
            unoptimized
            priority={true}
          />
        </div>
      </article>
    </DefaultPage>
  );
};
