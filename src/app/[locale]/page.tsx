import { Chatbot, Footer, Header } from "@/components";
import { setRequestLocale } from "next-intl/server";
import { TransformTeamSection } from "./home/transformTeamSection";
import { OptimizeYourBusiness } from "./home/optimizesYourBusiness";
import { ToolsDetails } from "./home/toolsDetails";
import { SupportSection } from "./home/supportSection";
import { getTranslations } from "next-intl/server";
import style from "./home/HomeStyles.module.scss";

type Props = {
  params: { locale: string };
};

export default async function Homepage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "home" });
  const a = await getTranslations({ locale, namespace: "accessibility" });

  const tools = [
    {
      id: 0,
      icon: "/assets/home/toolsDetails/1.png",
      desc: t.rich("card-1", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 1,
      icon: "/assets/home/toolsDetails/2.png",
      desc: t.rich("card-2", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 2,
      icon: "/assets/home/toolsDetails/3.png",
      desc: t.rich("card-3", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 3,
      icon: "/assets/home/toolsDetails/4.png",
      desc: t.rich("card-4", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
  ];

  const supportItems = [
    {
      id: 0,
      icon: "/assets/home/Support/1.svg",
      desc: t.rich("option-1", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 1,
      icon: "/assets/home/Support/2.svg",
      desc: t.rich("option-2", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 2,
      icon: "/assets/home/Support/3.svg",
      desc: t.rich("option-3", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 3,
      icon: "/assets/home/Support/4.svg",
      desc: t.rich("option-4", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
    {
      id: 4,
      icon: "/assets/home/Support/5.svg",
      desc: t.rich("option-5", {
        strong: (chunks) => <strong>{chunks}</strong>,
      }),
    },
  ];

  return (
    <main className={style.root}>
      <Header fixedHeader showButton showOptions />
      <TransformTeamSection
        title={t.rich("title-section1", {
          span: (chunks: any) => <span>{chunks}</span>,
        })}
        description={t.rich("description-section1", {
          strong: (chunks: any) => <strong>{chunks}</strong>,
        })}
        linkLabel={a("external-links.vkdr")}
        buttonLabel={t("buttonLabel-section1")}
      />
      <OptimizeYourBusiness
        title={t("title-section2")}
        description={t.rich("description-section2", {
          strong: (chunks: any) => <strong>{chunks}</strong>,
        })}
      />
      <ToolsDetails
        title={t.rich("title-section3", {
          span: (chunks: any) => <span>{chunks}</span>,
        })}
        tools={tools}
        subtitle={t("subtitle-section3")}
        buttonLabel={t("buttonLabel-section3")}
      />
      <SupportSection
        title={t.rich("title-section4", {
          span: (chunks: any) => <span>{chunks}</span>,
        })}
        buttonLabel={t("buttonLabel-section4")}
        supportItems={supportItems}
      />
      <Footer />
      <Chatbot />
    </main>
  );
}
