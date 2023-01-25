import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTHOME from './locales/pt/homescreen.json';
import PTLP from './locales/pt/support-plans.json';
import ENHOME from './locales/en/homescreen.json';
import ENLP from './locales/en/suppot-plans.json';


const resources = {
    'pt-BR': PTLP,
    'en-US': ENLP,
    
}

i18n
    .use(initReactI18next)
    .init({
    resources,
    fallbackLng: ["en-US"],
    lng : "pt-BR",
    interpolation: {
        escapeValue:false
    }
})


export default i18n;