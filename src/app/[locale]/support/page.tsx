import { ActionBar, DefaultPage, NavigationLink } from "@/components";
import { routing } from "@/i18n/routing";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { SupportCategories } from "./supportCategories";
import { ListDetails } from "./listDetails";
import { SupportBenefits } from "./supportBenefits";
import { FaInfoCircle } from "react-icons/fa";
import { FaLayerGroup, FaMedal, FaUsers, FaWrench } from "react-icons/fa6";
import { PricingSection } from "./pricingSection";

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("support.title"),
    description: t("support.description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function SupportPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "supportOptions" });

  const listDetailsItems = [
    {
      id: 1,
      label: t("body.benefits.option1"),
    },
    {
      id: 2,
      label: t("body.benefits.option2"),
    },
    {
      id: 3,
      label: t("body.benefits.option3"),
    },
    {
      id: 4,
      label: t("body.benefits.option4"),
    },
    {
      id: 5,
      label: t("body.benefits.option5"),
    },
    {
      id: 6,
      label: t("body.benefits.option6"),
    },
    {
      id: 7,
      label: t("body.benefits.option7"),
    },
    {
      id: 8,
      label: t("body.benefits.option8"),
    },
    {
      id: 9,
      label: t("body.benefits.option9"),
    },
    {
      id: 10,
      label: t("body.benefits.option10"),
    },
    {
      id: 11,
      label: t("body.benefits.option11"),
    },
    {
      id: 12,
      label: t("body.benefits.option12"),
    },
    {
      id: 13,
      label: t("body.benefits.option13"),
    },
    {
      id: 14,
      label: t("body.benefits.option14"),
    },
    {
      id: 15,
      label: t("body.benefits.option15"),
    },
    {
      id: 16,
      label: t("body.benefits.option16"),
    },
  ];

  const supportBenefitsCards = [
    {
      id: 1,
      icon: <FaInfoCircle />,
      title: t("body.items.item1.title"),
      desc: t("body.items.item1.description"),
    },
    {
      id: 2,
      icon: <FaLayerGroup />,
      title: t("body.items.item2.title"),
      desc: t("body.items.item2.description"),
    },
    {
      id: 3,
      icon: <FaWrench />,
      title: t("body.items.item3.title"),
      desc: t("body.items.item3.description"),
    },
    {
      id: 4,
      icon: <FaUsers />,
      title: t("body.items.item4.title"),
      desc: t.rich("body.items.item4.description", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 5,
      icon: <FaMedal />,
      title: t("body.items.item5.title"),
      desc: t.rich("body.items.item5.description", {
        p: (chunks) => <p>{chunks}</p>,
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
  ];

  return (
    <DefaultPage
      titleBar
      title={t("title")}
      subtitle={t("subtitle")}
      showButton
      showOptions
    >
      <SupportCategories title={t("body.title1")} desc={t("body.subtitle1")} />
      <ListDetails title={t("body.title2")} items={listDetailsItems} />
      <SupportBenefits title={t("body.title3")} cards={supportBenefitsCards} />
      <PricingSection
        title={t("body.title4")}
        desc={t.rich("body.description4", {
          strong: (chunks) => (
            <strong>
              <NavigationLink href="/pricing/#plans">{chunks}</NavigationLink>
            </strong>
          ),
        })}
      />
      <ActionBar
        title={t("action.title")}
        buttonLabel={t("action.buttonLabel")}
        variant="contact"
      />
    </DefaultPage>
  );
}
