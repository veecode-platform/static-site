import { useTranslations } from "next-intl";
import style from "./SupportBenefits.module.scss";
import {
  FaLayerGroup,
  FaInfoCircle,
  FaUsers,
  FaMedal,
  FaWrench,
} from "react-icons/fa";
import { SupportCard } from "./SupportCard";

export const SupportBenefits = () => {
  const t = useTranslations("supportOptions.body");

  return (
    <div className={style.cards}>
      <h2 className={style.title}>{t("title3")}</h2>
      {/* Card 01 */}
      <SupportCard
        icon={<FaInfoCircle />}
        title={t("items.item1.title")}
        description={t("items.item1.description")}
      />
      {/* Card 02 */}
      <SupportCard
        icon={<FaLayerGroup />}
        title={t("items.item2.title")}
        description={t("items.item2.description")}
      />
      {/* Card 03 */}
      <SupportCard
        icon={<FaWrench />}
        title={t("items.item3.title")}
        description={t("items.item3.description")}
      />
      {/* Card 04 */}
      <SupportCard
        icon={<FaUsers />}
        title={t("items.item4.title")}
        description={t.rich("items.item4.description", {
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      />
      {/* Card 05 */}
      <SupportCard
        icon={<FaMedal />}
        title={t("items.item5.title")}
        description={t.rich("items.item5.description", {
          p: (chunks) => <p>{chunks}</p>,
          strong: (chunks) => <strong>{chunks}</strong>,
        })}
      />
    </div>
  );
};
