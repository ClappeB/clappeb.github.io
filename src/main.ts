/* eslint-disable vue/multi-word-component-names */
import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import Button from "primevue/button";
import Chip from "primevue/chip";
import MultiSelect from "primevue/multiselect";
import Chart from "primevue/chart";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import TriStateCheckbox from "primevue/tristatecheckbox";
import DataTable from "primevue/datatable";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});

app.component("Button", Button);
app.component("Chip", Chip);
app.component("MultiSelect", MultiSelect);
app.component("Chart", Chart);
app.component("Column", Column);
app.component("InputText", InputText);
app.component("TriStateCheckbox", TriStateCheckbox);
app.component("DataTable", DataTable);

app.mount("#app");
