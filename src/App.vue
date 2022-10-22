<script setup lang="ts">
import type { SideBarItem } from "./types/app";

import { ref } from 'vue'

import { RouterLink, RouterView } from "vue-router";
import SideBar from 'primevue/sidebar';
import Button from 'primevue/button';
import SidebarContent from '!/SidebarContent.vue'

const navbarVisible = ref(false);
const toggle = () => navbarVisible.value = !navbarVisible.value;

const items : Array<SideBarItem> = [
  {id: 1, label: "About me", icon: "pi-info-circle", anchor: "about"},
  {id: 2, label: "My resume", icon: "pi-user", anchor: "resume"},
  {id: 3, label: "My skills", icon: "pi-code", anchor: "skills"},
] ;

</script>

<template>
  <SideBar v-model:visible="navbarVisible" class="navbar">
    <SidebarContent :items="items" @close="toggle"/>
  </SideBar>
  <Transition name="slide">
    <Button v-if="!navbarVisible" icon="pi pi-bars" @click="toggle" class="p-button-rounded p-button-outlined menu-btn"></Button>
  </Transition>
</template>

<style scoped lang="scss">
.menu-btn {
  position: fixed;
  right: 8vw;
  bottom: 6vh;
  font-size: 25px;
  width: clamp(20px, 50px, 80px)!important;
  height: clamp(20px, 50px, 80px)!important;
}

.slide-enter-active,
.slide-leave-active {
  transition: bottom 0.8s cubic-bezier(.66,-0.59,.47,1.62);
} 

.slide-enter-from, .slide-leave-to {
  bottom: -8vh;
}

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */

#root {
  display: grid;
  grid-template-areas: 'sidebar router-view';
  grid-template-columns: auto 1fr;
  font-family: sans-serif;
}
.sidebar {
  grid-area: 'sidebar';
}
.router-view {
  grid-area: 'router-view';
  padding: 1rem;
}
</style>

<!-- 
 <template>
  <div>
      <button icon="pi pi-arrow-right" @click="visibleLeft = !visibleLeft" class="mr-2">A</button>
      <button icon="pi pi-arrow-left" @click="visibleRight = !visibleRight" class="mr-2" >B</button>
      <button icon="pi pi-arrow-down" @click="visibleTop = !visibleTop" class="mr-2" >C</button>
      <button icon="pi pi-arrow-up" @click="visibleBottom = !visibleBottom" class="mr-2" >D</button>
      <button icon="pi pi-th-large" @click="visibleFull = !visibleFull" >E</button>

      <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000">
          <h3>Left Sidebar</h3>
      </Sidebar>

      <Sidebar v-model:visible="visibleRight" :baseZIndex="10000" position="right">
          <h3>Right Sidebar</h3>
      </Sidebar>

      <Sidebar v-model:visible="visibleTop" :baseZIndex="10000" position="top">
          <h3>Top Sidebar</h3>
      </Sidebar>

      <Sidebar v-model:visible="visibleBottom" :baseZIndex="10000" position="bottom">
          <h3>Bottom Sidebar</h3>
      </Sidebar>

      <Sidebar v-model:visible="visibleFull" :baseZIndex="10000" position="full">
          <h3>Full Screen</h3>
      </Sidebar>
      <Knob v-model="v1" readonly></Knob>
      <input type="number" v-model="v1" />
      <p>{{v1}}</p>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Knob from 'primevue/knob';
import Sidebar from 'primevue/sidebar';

export default {
  components: {
    Knob,
    Sidebar
  },
  setup() {
      const visibleLeft = ref(false);
      const visibleRight = ref(false);
      const visibleTop = ref(false);
      const visibleBottom = ref(false);
      const visibleFull = ref(false);
      const v1 = ref(0);
      const v2 = ref(0);

  return { visibleLeft, visibleRight, visibleTop, visibleBottom, visibleFull, v1, v2 }
  }
}
</script> -->