import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
library.add(
  // free solid
  faBars,
  faLocationDot,
  faPhone,
  faEnvelope,

  // free brands
  faFacebook,
  faInstagram
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
