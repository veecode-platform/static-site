import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { LANGUAGES } from "@/utils/constants/languages";
import { notFound } from "next/navigation";
import "./global.scss";
import { Chatbot } from "@/components";

const thumbnailImageUrl =
  "https://cdn.platform.vee.codes/landing-page/thumbnail.png";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "600", "500", "600", "700", "800", "900"],
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("home.title"),
    description: t("home.description"),
    keywords: ["backstage", "idp", "platform", "veecode"],
    openGraph: {
      title: t("home.title"),
      images: thumbnailImageUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
  };
}

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  // Enable static rendering
  setRequestLocale(locale);

  if (!LANGUAGES.includes(locale)) notFound();

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${poppins.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Chatbot />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
