import en from './locales/en.json';

type Messages = typeof en;

declare global {
  type IntlMessages = Messages;
}