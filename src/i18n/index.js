import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PT from './locales/pt/support-plans.json';
import EN from './locales/en/suppot-plans.json';
import detector from "i18next-browser-languagedetector";

const resources = {
    'pt': PT,
    'en': EN,
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        supportedLngs: ['en', 'pt'],
        lng: ['en', 'pt'],
        ns: 'translation',
        useBrowserDefault: true,
        interpolation: {
            escapeValue: false
        }
    })


export default i18n;