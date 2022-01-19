import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style/index.less";
import "element-ui/lib/theme-chalk/index.css";
import "./lib/element";
// import tween from '../../package/tween'
// console.log(tween)
Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
