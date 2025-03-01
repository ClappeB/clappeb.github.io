<script setup lang="ts">
import type { SideBarItem } from "./types/app";

import { ref, onMounted } from "vue";

import { RouterLink, RouterView } from 'vue-router'

const navbarVisible = ref(false);
const toggle = () => (navbarVisible.value = !navbarVisible.value);

const scrolled = ref(false);
onMounted(() => window.addEventListener("scroll", () => (scrolled.value = window.scrollY > window.innerHeight / 2)));

const items: Array<SideBarItem> = [
  { label: "Home", icon: "pi-home" },
  { label: "About me", icon: "pi-info-circle", anchor: "about" },
  { label: "My experiences", icon: "pi-briefcase", anchor: "experiences" },
  { label: "My skills", icon: "pi-code", anchor: "skills" },
  { label: "Contact me", icon: "pi-inbox", anchor: "contact" },
];
</script>

<template>

  <nav id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>

  <RouterView />

</template>

<style scoped lang="scss">
#nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
