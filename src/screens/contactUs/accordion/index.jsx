import style from "./_Accordion.module.scss";
import FaqData from "./faq.json";
import AccordionItem from "./accordionItem";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const Accordion = () => {

  let items = [];

  i18n.language == 'pt' ? items = FaqData.pt : items = FaqData.en;

  const { t } = useTranslation();

  const [clicked, setClicked] = useState("0");

  const handleToggle = (id) => {
    if (clicked === id) {
      return setClicked("0");
    }
    setClicked(id);
  }

  return (
    <section className={style.wrapper} onBlur={() => { setClicked("0") }}>
      <article className={style.content}>
        <ul className={style.content__faqList}>
          {
            items.map(item => (
              <AccordionItem
                key={item.id}
                item={item}
                onToggle={() => { handleToggle(item.id) }}
                active={clicked === item.id}
              />
            ))
          }
        </ul>
      </article>
    </section>
  )
}

export default Accordion