import Vue from "vue";
import App from "./App.vue";
import {
  Row,
  Col,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Select,
  Option,
  Input,
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
