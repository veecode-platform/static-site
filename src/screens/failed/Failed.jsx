import { Button } from "../../components";
import style from "../../../styles/Failed.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";

const DefaultPage = dynamic(()=> import('../../components/defaultPage/DefaultPage'));

const FailedImage = "/assets/icons/failed.png";

const Failed = () => {
  return (
    <DefaultPage
       titleBar="disable"
       noBack>
      <article className={style.content}>
        <div className={style.content__image}>
          <img
            src={FailedImage}
            alt="Failed Animation"
             />
        </div>
        <div className={style.content__details}>
          <p>Failed Operation</p>
          <p>
            There was an error in the transaction, please check your details and
            try again ...
          </p>
        </div>
        <div className={style.content__buttonWrapper}>
          <Link href="/checkout" passHref>
            <a>
              <Button>
                Try Again
              </Button>
            </a>
          </Link>
        </div>
      </article>
    </DefaultPage>
  );
};

export default Failed;
