import { ReactNode } from 'react';

export interface DefaultPageProps {
  titleBar?: boolean;
  title?: string;
  subtitle?: ReactNode;
  children: ReactNode;
  noPrevious?: boolean;
  noBack?: boolean;
  noFooter?: boolean;
  showButton?: boolean;
  showOptions?: boolean;
  notTranslate?: boolean;
  noSpace?: boolean;
  backToUrl?: string;
}
