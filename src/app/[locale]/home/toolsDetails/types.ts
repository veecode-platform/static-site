import { ReactNode } from 'react';

export interface toolsDetailsProps {
  title: string | ReactNode;
  tools: ITool[];
  subtitle: string;
  buttonLabel: string;
}

export interface ITool {
  id: number;
  icon: string;
  desc: string | ReactNode;
}
