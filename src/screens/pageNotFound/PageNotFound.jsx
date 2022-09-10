import { DefaultPage } from "../../components";
import style from "../../../styles/_PageNotFound.module.scss";

const Image = "assets/notFound/404.png";

const PageNotFound = () => {
  return (
    <DefaultPage
        header="disable"
        >
      <article className={style.wrapper}>
        <img src={Image} className={style.image} alt="Page Not Found Image" />
      </article>
    </DefaultPage>
  );
};

export default PageNotFound;
