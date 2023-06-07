import Link from "next/link";
import style from "../../../styles/ContactBar.module.scss";
import Button from "../button/Button";
import { useTranslation } from 'react-i18next';

const ContactBar = () => {

  const { t } = useTranslation();

  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <h4>{t("contact-bar-title")}</h4>
      </div>
      <div className={style.content__button}>
      <Link
        href="/contact-us"
        //href="mailto:platform-sales@vee.codes"
        passHref
        >
        <a target="_blank">
          <Button>
            {t("contact-bar-label")}
          </Button>
        </a>
      </Link>
      </div>
    </div>
  );
};

export default ContactBar;
