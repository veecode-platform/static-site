import { setRequestLocale } from "next-intl/server";
import { HeaderDefault, HeroComponent } from "./components";

type Props = {
  params: { locale: string };
};

export async function generateMetadata() {
  return {
    title: "VeeCode Platform | Avaliacao",
    description: "Nível de adoção de práticas de Platform Engineering",
  };
}

export default function AvaliacaoPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeaderDefault />
      <HeroComponent />
    </>
  );
}
