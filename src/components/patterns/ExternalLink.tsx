"use client";

import { ReactNode } from "react";

type Props = {
  title: string | ReactNode;
  href: string;
};

export function ExternalLink({ href, title }: Props) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {title}
    </a>
  );
}
