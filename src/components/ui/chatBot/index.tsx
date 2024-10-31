"use client";

import { usePathname } from "@/i18n/routing";
import React from "react";

const NEUROLEAD_ID = process.env.NEXT_PUBLIC_NEUROLEAD_ID;

export const Chatbot = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.leadster.com.br/neurolead/neurolead.min.js";
      script.async = true;
      script.onload = () => {
        if (window) {
          window.neuroleadId = NEUROLEAD_ID;
        }
      };
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [pathname]);

  return null;
};
