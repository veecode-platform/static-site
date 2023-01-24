import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTHOME from './locales/pt/homescreen.json';
import ENHOME from './locales/en/homescreen.json';
import i18next from 'i18next';

const resources = {
    'pt-BR': PTHOME,
    'en-US': ENHOME
}

i18n
    .use(initReactI18next)
    .init({
    resources,
    fallbackLng: ["pt-BR"],
    lng : i18n.language,
    interpolation: {
        escapeValue:false
    }
})


export default i18n;