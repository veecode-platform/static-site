import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  description: string;
  children: string | ReactNode;
}

export function ExternalLink({
  href,
  description,
  children,
}: ExternalLinkProps) {
  return (
    <a href={href} rel="noreferrer" target="_blank" aria-label={description}>
      {children}
    </a>
  );
}
