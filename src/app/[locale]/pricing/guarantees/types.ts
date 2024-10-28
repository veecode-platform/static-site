import { ReactNode } from "react";

export interface GuaranteesProps {
  details: string | ReactNode;
  cards: IGuaranteeCard[];
}

export interface IGuaranteeCard {
  id: number;
  icon: string;
  title: string;
  desc: string;
}
