import type { Metadata } from "next";
import "../global.scss";
import { Poppins } from "next/font/google";

const thumbnailImageUrl =
  "https://cdn.platform.vee.codes/landing-page/thumbnail.png";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

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

export default function PersonaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
