import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import uzTranslate from "../public/locales/uz.json";
import enTranslate from "../public/locales/en.json";

const language = localStorage.getItem("i18nextLng") || "uz";

i18n
  .use(Backend)
  // Tilni aniqlab berish
  .use(LanguageDetector)
  // Bog'lash
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: language,
    debug: true,
    resources: {
      uz: { translation: uzTranslate },
      en: { translation: enTranslate }
    }
  });

export default i18n;
