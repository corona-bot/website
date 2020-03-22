import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import deDE from "./resources/translations/de_de.json";
import enUS from "./resources/translations/en_us.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "de-DE",
    debug: false,
    backend: {
      loadPath: "/"
    },
    interpolation: {
      escapeValue: false
    }
  });
i18n.addResourceBundle("de-DE", "translation", deDE);
i18n.addResourceBundle("en-US", "translation", enUS);
export default i18n;
