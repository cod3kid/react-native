import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { find, get } from "lodash";
import { languages } from "./index";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: { email: "Email", password: "Password" },
  sp: { email: "Correo eléctronico", password: "Contraseña" },
};
// Set the locale once at the beginning of your app.
i18n.locale = "sp";

const translation = (key) => {
  return i18n.t(key);
};

export const getCurrentLanguage = () => {
  return get(find(languages, { id: i18n.currentLocale() }), "language");
};

export default translation;
