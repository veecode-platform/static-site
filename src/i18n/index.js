import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTHOME from './locales/pt/homescreen.json';
import PTLP from './locales/pt/support-plans.json';
import ENHOME from './locales/en/homescreen.json';
import ENLP from './locales/en/suppot-plans.json';
import i18next from 'i18next';
import detector from "i18next-browser-languagedetector";

const resources = {
    'pt': PTLP,
    'en': ENLP,
    
}

i18n
    .use(detector)
    .use(initReactI18next)
    .init({
    resources,
    fallbackLng: "en",
    supportedLngs:['pt', 'en'],
    lng : i18n.language,
    ns: 'translation',
    useBrowserDefault: true,
    interpolation: {
        escapeValue:false
    }
})


export default i18n;