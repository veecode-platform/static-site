import { Button, NavigationLink } from "@/components";
import style from "./contactSectionStyles.module.scss";
import { ContactSectionProps } from "./types";

const NotebookImg = "/assets/governance/notebook.svg";

export const ContactSection: React.FC<ContactSectionProps> = ({
  description,
  buttonLabel,
}) => {
  return (
    <section className={style.contactSection}>
      <article className={style.content}>
        <img src={NotebookImg} alt="" className={style.content__image} />
        <div className={style.content__text}>
          {description}
          <NavigationLink href="/contact-us">
            <Button aria-label={buttonLabel}>{buttonLabel}</Button>
          </NavigationLink>
        </div>
      </article>
    </section>
  );
};
