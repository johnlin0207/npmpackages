import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import i18n from "./i18n/index";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount("#app");
