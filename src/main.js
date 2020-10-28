import Vue from 'vue'
import router from "@/router";
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueGtag from "vue-gtag";

library.add(faBars);
library.add(faUpload);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueGtag, {
  config: { id: "G-5H9Q47P292" }
});


export const serverBus = new Vue();


export default new Vue();
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App,
  },
});
