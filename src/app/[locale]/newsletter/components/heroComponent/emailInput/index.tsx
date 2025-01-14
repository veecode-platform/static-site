import { Button } from "@/components";
import style from "./emailInputStyles.module.scss";
import { RiMailSendLine } from "react-icons/ri";

export const EmailInput = () => {
  return (
    <div className={style.field}>
      <span className={style.field__label}>
        Insira seu endereço de e-mail abaixo
      </span>
      <div className={style.field__actions}>
        <input type="email" className={style.input} />
        <Button>
          <span className={style.buttonLabel}>
            <RiMailSendLine /> Assinar
          </span>
        </Button>
      </div>
    </div>
  );
};
