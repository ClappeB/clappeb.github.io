/// <reference types="vite/client" />

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module 'vue-sidebar-menu-akahon' {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{},{}, any>
  export default component;
}