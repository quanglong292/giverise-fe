import { createMemoryHistory, createRouter } from "vue-router";

import ViewDashboard from "@/views/Dashboard/ViewDashboard.vue";
import ViewLogin from "@/views/Login/ViewLogin.vue";

export const routes = [
  { path: "/", component: ViewDashboard },
  { path: "/login", component: ViewLogin },
];
