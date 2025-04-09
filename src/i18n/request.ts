import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // return {
  //   messages: (
  //     await (locale === "en"
  //       ? // When using Turbopack, this will enable HMR for `en`
  //         import("../../locales/en.json")
  //       : import(`../../locales/${locale}.json`))
  //   ).default,
  // };
  return {
    messages: (await import(`../../locales/${locale}.json`)).default,
  };
});
