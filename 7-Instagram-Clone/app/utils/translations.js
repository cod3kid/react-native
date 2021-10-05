import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { find, get } from "lodash";

import { getAppLanguage } from "./storage";
import { languages } from "./index";

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {
  en: {
    email: "Email",
    password: "Password",
    selectYourLanguage: "Select your language",
    search: "Search",
    loginButton: "Log In",
    forgotLoginText: "Forgot your login details?",
    getLoginHelp: "Get help logging in",
    or: "Or",
    loginWithFacebook: "Log In with Facebook",
    preSignUpText: "Don't have an account?",
    signUp: "Sign up",

    English: "English",
    Spanish: "Spanish",
  },
  sp: {
    email: "Correo eléctronico",
    password: "Contraseña",
    selectYourLanguage: "Selecciona tu idioma",
    search: "Busca",
    loginButton: "Entrar",
    forgotLoginText: "¿Has olvidado tus datos de incio de sesión?",
    getLoginHelp: "Obtén ayuda",
    or: "O",
    loginWithFacebook: "Iniciar sesión con Facebook",
    preSignUpText: "¿No tienes una cuenta?",
    signUp: "Registrate",

    English: "Ingles",
    Spanish: "Espanol",
  },
};
// Set the locale once at the beginning of your app.
i18n.locale = "en";

const translation = (key) => {
  return i18n.t(key);
};

export const getCurrentLanguage = () => {
  return get(find(languages, { id: i18n.currentLocale() }), "language");
};

export default translation;
