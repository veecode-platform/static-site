import { ReactNode } from 'react';

export interface SupportBenefitsProps {
  title: string;
  cards: ISupportBenefitsCard[];
}

export interface ISupportBenefitsCard {
  id: number;
  icon: ReactNode;
  title: string;
  desc: string | ReactNode;
}
