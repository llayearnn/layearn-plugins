import Vue from "vue";
import App from "./App.vue";
import SvgIcon from "./packages/svg-icon";
Vue.use(SvgIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
