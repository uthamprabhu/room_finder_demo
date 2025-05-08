import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';

const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
};

// ✅ Detect language from current path, e.g., '/fr/contact'
const pathLang = window.location.pathname.split('/')[1];
const detectedLang = ['en', 'fr'].includes(pathLang) ? pathLang : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectedLang, // 🔥 critical: don't hardcode 'en'
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
