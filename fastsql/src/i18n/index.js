import Vue from "vue";
import VueI18n from "vue-i18n";
import zh from "../lang/zh_CN";
import en from "../lang/en";
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: "zh",
  fallbackLocale: "zh",
  messages: {
    zh: {
      ...zh,
    },
    en: {
      ...en,
    },
  },
});

export default i18n;
