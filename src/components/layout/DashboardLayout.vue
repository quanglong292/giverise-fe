<template>
  <div class="--layout-container d-flex">
    <nav class="d-flex flex-column">
      <RouterLink to="/dashboard/tables">Go to Dashboard</RouterLink>
      <RouterLink to="/dashboard/invitees">Go to Invitees</RouterLink>
      <RouterLink to="/dashboard/donations">Go to Donations</RouterLink>
      <RouterLink to="/login">Go to Login</RouterLink>
      <v-btn @click="handleLogout">Log out</v-btn>
    </nav>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

// Functions
function handleLogout() {
  router.push({
    name: "login",
  });
}
</script>

<style lang="scss" scoped>
.--layout-container {
  height: 100vh;
  background-image: url("@/assets/body-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
