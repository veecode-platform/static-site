'use client';

import { ComponentProps } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  Link, 
} from '@/i18n/routing';

export function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      href={href}
      aria-label={`Link: ${pathname}`}
      {...rest}
    />
  );
}
