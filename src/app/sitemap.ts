import { MetadataRoute } from "next";
import { Locale, getPathname, routing } from "@/i18n/routing";
import { host } from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry("/"),
    getEntry("/plugins"),
    getEntry("/plugin/[path]" as any),
    getEntry("/pricing"),
    getEntry("/pricing/#plans"),
    getEntry("/free-plan?plan=free"),
    getEntry("/contact-us"),
    getEntry("/contact-success"),
    getEntry("/how-it-works"),
    getEntry("/support"),
    getEntry("/terms-of-service"),
    getEntry("/privacy-policy"),
    getEntry("/faq"),
    getEntry("/success"),
    getEntry("/failed"),
    getEntry("/validate"),
    getEntry("/governance"),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
}
