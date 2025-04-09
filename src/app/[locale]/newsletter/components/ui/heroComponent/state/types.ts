export interface IFeedback {
  variant: 'success' | 'error' | 'warning' | 'info' | null;
  message: string;
}
