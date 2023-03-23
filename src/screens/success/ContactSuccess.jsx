import { Button } from "../../components";
import style from "../../../styles/Success.module.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useTranslation } from 'react-i18next';

const DefaultPage = dynamic(()=> import('../../components/defaultPage/DefaultPage'));
const SuccessImage = "/assets/icons/success.png";

const ContactSuccess = () => {
  const { t } = useTranslation();

  return (
    <DefaultPage
     titleBar="disable"
     noBack
     showOptions
     >
      <article className={style.content}>
        <div className={style.content__image}>
          <img 
            src={SuccessImage} 
            alt="Success Animation"
             />
        </div>
        <div className={style.content__details}>
          <p>{t("We have received your email!")}</p>
          <p>{t("Our team will get back to you as soon as we can!")}</p>
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

export default ContactSuccess;
