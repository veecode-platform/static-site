import type { Metadata } from "next";
import "../global.scss";
import { poppins } from "@/font";

const thumbnailImageUrl =
  "https://cdn.platform.vee.codes/landing-page/thumbnail.png";

export const metadata: Metadata = {
  title: "VeeCode Platform | Avaliacao",
  description: "Nível de adoção de práticas de Platform Engineering",
  keywords: ["Avaliacao", "VeeCode", "Devportal", "Backstage"],
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

export default function AvaliacaoLayout({
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
