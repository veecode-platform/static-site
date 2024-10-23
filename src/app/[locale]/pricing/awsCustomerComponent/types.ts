export interface cardAwsContentProps {
  title: string;
  description: string;
  cards: IAwsCard[];
}

export interface IAwsCard {
  id: number;
  title: string;
  icon: string;
  desc: string;
  info: string;
  link: string;
  buttonLabel1: string;
  buttonLabel2: string;
}
