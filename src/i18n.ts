import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    resources: {
      es: { global: global_es },
      en: { global: global_en }
    },
    defaultNS: 'global',
    ns: ['global']
  });

export default i18next;