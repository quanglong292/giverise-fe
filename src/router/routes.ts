import ViewDashboard from "@/views/Dashboard/ViewDashboard.vue";
import ViewLogin from "@/views/Login/ViewLogin.vue";
import DashboardLayout from "@/components/layout/DashboardLayout.vue";

export const routes = [
  {
    path: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "tables",
        component: ViewDashboard, // List View + Map View of Tables
      },
      {
        path: "invitees",
        component: null,
      },
      {
        path: "donations",
        component: null,
      },
    ],
  },
  { name: "login", path: "/login", component: ViewLogin },
];
