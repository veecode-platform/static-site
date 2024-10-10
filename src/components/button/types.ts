export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  modal?: any;
  loading?: boolean;
  alt?: boolean;
  headerButton?: boolean;
  handleClick?: () => void;
}
