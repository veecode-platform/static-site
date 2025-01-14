import { setRequestLocale } from "next-intl/server";
import { HeaderDefault, HeroComponent } from "./components";

type Props = {
  params: { locale: string };
};

export async function generateMetadata() {
  return {
    title: "VeeCode Platform | Newsletter",
    description: "Conecte-se ao universo VeeCode",
  };
}

export default function NewsletterPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <HeaderDefault />
      <HeroComponent />
    </>
  );
}
