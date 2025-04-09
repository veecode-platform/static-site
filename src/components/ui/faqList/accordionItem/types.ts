import { IFaq } from '../types';

export interface AcordionItemProps {
  item: IFaq;
  onToggle: (id: number) => void;
  active: boolean;
}
