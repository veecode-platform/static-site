import type { Metadata } from "next";
import localFont from "next/font/local";
import "../global.scss";
import { poppins } from "@/font";

const thumbnailImageUrl =
  "https://cdn.platform.vee.codes/landing-page/thumbnail.png";

export const metadata: Metadata = {
  title: "VeeCode Platform | Newsletter",
  description: "Conecte-se ao universo VeeCode",
  keywords: ["newsletter", "VeeCode", "Devportal", "Backstage"],
  openGraph: {
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

export default function NewsLetterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
