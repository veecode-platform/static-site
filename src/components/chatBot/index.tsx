"use client";

import { usePathname } from "@/i18n/routing";
import React from "react";

const NEUROLEAD_ID = process.env.NEXT_PUBLIC_NEUROLEAD_ID;

export const Chatbot = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/" || pathname === "/governance") {
      const script = document.createElement("script");
      script.defer = true;
      script.type = "text/javascript";
      script.src = "https://cdn.leadster.com.br/neurolead/neurolead.min.js";
      document.head.appendChild(script);

      window.neuroleadId = NEUROLEAD_ID;
    }
  }, [pathname]);

  return null;
};
