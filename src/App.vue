<script setup lang="ts">
import type { SideBarItem } from "./types/app";

import { ref } from 'vue'

import { RouterLink, RouterView } from "vue-router";
import SideBar from 'primevue/sidebar';
import Button from 'primevue/button';
import SidebarContent from '!/SidebarContent.vue';
import Home from './components/Home.vue'

const navbarVisible = ref(false);
const toggle = () => navbarVisible.value = !navbarVisible.value;

const items : Array<SideBarItem> = [
  {id: 1, label: "About me", icon: "pi-info-circle", anchor: "about"},
  {id: 2, label: "My resume", icon: "pi-user", anchor: "resume"},
  {id: 3, label: "My skills", icon: "pi-code", anchor: "skills"},
  {id: 4, label: "Contact me", icon: "pi-inbox", anchor: "contact"}
] ;

</script>

<template>
  <SideBar v-model:visible="navbarVisible" class="navbar">
    <SidebarContent :items="items" @close="toggle"/>
  </SideBar>
  <Transition name="slide">
    <Button v-if="!navbarVisible" icon="pi pi-bars" @click="toggle" class="p-button-rounded p-button-outlined menu-btn"></Button>
  </Transition>
  <Home />

</template>

<style scoped lang="scss">
.menu-btn {
  position: fixed;
  right: 8vw;
  bottom: 6vh;
  font-size: 25px;
  width: clamp(20px, 50px, 80px)!important;
  height: clamp(20px, 50px, 80px)!important;
  z-index: 999;
}

.slide-enter-active,
.slide-leave-active {
  transition: bottom 0.8s cubic-bezier(.66,-0.59,.47,1.62);
} 

.slide-enter-from, .slide-leave-to {
  bottom: -8vh;
}
</style>