import Link from "next/link";
import style from "../../../styles/_ContactBar.module.scss";
import Button from "../button/Button";

const ContactBar = () => {
  return (
    <div className={style.content}>
      <div className={style.content__title}>
        <h4>Need help deciding?</h4>
      </div>
      <div className={style.content__button}>
      <Link
        href="mailto:platform-sales@vee.codes"
        passHref
        >
        <a target="_blank">
          <Button>
            Contact Sales
          </Button>
        </a>
      </Link>
      </div>
    </div>
  );
};

export default ContactBar;
