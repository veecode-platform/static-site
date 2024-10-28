import { useTranslations } from "next-intl";
import style from "./SupportBenefits.module.scss";
import {
  FaLayerGroup,
  FaInfoCircle,
  FaUsers,
  FaMedal,
  FaWrench,
} from "react-icons/fa";
import { SupportCard } from "./supportCard";
import { SupportBenefitsProps } from "./types";

export const SupportBenefits: React.FC<SupportBenefitsProps> = ({
  title,
  cards,
}) => {
  const t = useTranslations("supportOptions.body");

  return (
    <div className={style.cards}>
      <h2 className={style.title}>{title}</h2>
      {cards.map((card) => (
        <SupportCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.desc}
        />
      ))}
    </div>
  );
};
