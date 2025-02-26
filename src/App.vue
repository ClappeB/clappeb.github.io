<script setup lang="ts">
import type { SideBarItem } from "./types/app";

import { ref, onMounted } from "vue";

import SideBar from "primevue/sidebar";
import Button from "primevue/button";
import SidebarContent from "@components/SidebarContent.vue";
import HomePage from "@pages/HomePage.vue";
import AboutPage from "@pages/AboutPage.vue";
import ExperiencesPage from "@pages/ExperiencesPage.vue";
import SkillsPage from "@pages/SkillsPage.vue";
import ContactPage from "@pages/ContactPage.vue";

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
  <SideBar v-model:visible="navbarVisible" class="navbar">
    <SidebarContent :items="items" @close="toggle" />
  </SideBar>
  <Transition name="slide">
    <Button v-if="!navbarVisible && scrolled" icon="pi pi-bars" @click="toggle" class="p-button-rounded p-button-outlined menu-btn"></Button>
  </Transition>
  <HomePage />
  <AboutPage />
  <ExperiencesPage />
  <SkillsPage />
  <ContactPage />
</template>

<style scoped lang="scss">
.menu-btn {
  position: fixed;
  right: 8vw;
  bottom: 6vh;
  font-size: 25px;
  width: clamp(20px, 50px, 80px) !important;
  height: clamp(20px, 50px, 80px) !important;
  z-index: 999;
  background: var(--blue-green) !important;
  color: var(--foreground-clr-inv) !important;
  border: none !important;
}

.slide-enter-active,
.slide-leave-active {
  transition: bottom 0.8s cubic-bezier(0.66, -0.59, 0.47, 1.62);
}

.slide-enter-from,
.slide-leave-to {
  bottom: -8vh;
}
</style>
