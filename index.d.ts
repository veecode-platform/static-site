export {};

declare module '*.module.css';
declare module '*.module.scss';
declare module '*.module.sass';
declare global {
  interface Window {
    cloudinary: any;
    gtag: (...args: any[]) => void;
    neuroleadId: string | undefined;
  }
}
