import { ReactNode } from "react";

export interface SupportSectionProps {
  title: string | ReactNode;
  buttonLabel: string;
  supportItems: ISupportItem[];
}

export interface ISupportItem {
  id: number;
  icon: string;
  desc: string | ReactNode;
}
