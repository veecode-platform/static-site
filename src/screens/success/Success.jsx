import { Button } from "../../components";
import style from "../../../styles/_Success.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";

const DefaultPage = dynamic(()=> import('../../components/defaultPage/DefaultPage'));
const SuccessImage = "/assets/icons/success.png";

const Success = () => {
  return (
    <DefaultPage
     titleBar="disable"
     noBack
     >
      <article className={style.content}>
        <div className={style.content__image}>
          <img 
            src={SuccessImage} 
            alt="Success Animation"
             />
        </div>
        <div className={style.content__details}>
          <p>Payment confirmation in progress</p>
          <p> We will send you an email when everything is ok ...</p>
        </div>
        <div className={style.content__buttonWrapper}>
          <Link href="/" passHref>
            <a>
              <Button>
                Home
              </Button>
            </a>
          </Link>
        </div>
      </article>
    </DefaultPage>
  );
};

export default Success;
