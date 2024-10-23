import type { ReactNode } from "react";

type Props = {
  children: string | ReactNode;
  href: string;
};

export function ExternalLink({ href, children }: Props) {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}
