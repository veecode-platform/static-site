import { ReactNode } from "react";

export interface PlansDetailsProps {
  title: string;
  subtitle: ReactNode;
  label: ReactNode;
  freePlan?: boolean;
  buttonLabel: string;
  children: ReactNode;
}
