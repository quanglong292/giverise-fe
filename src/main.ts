import { createApp } from "vue";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@/styles/main.scss";
import App from "./App.vue";

// Router
import router from "./router";

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});
const app = createApp(App);

// Initial libraries
app.use(router);
app.use(pinia);
app.use(vuetify);

app.mount("#app");
