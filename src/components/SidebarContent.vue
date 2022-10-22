<script setup lang="ts">
import type { SideBarItem } from "../types/app";

import Button from 'primevue/button';

const props = defineProps({
    items: {type: Array<SideBarItem>, required: true},
})

const emits = defineEmits(["close"]);

const goToLocation = (anchor: string) => {
    emits("close");
    let url = location.href;               //Saving URL without hash.
    location.href = "#"+anchor;                 //Navigate to the target element.
    //history.replaceState(null,"",url);   //method modifies the current history entry.
}
</script>

<template>
    <h1 class="navbar-title">Bruno Clappe</h1>
    <div class="wrapper">
        <Button v-for="item in items" :icon="'pi '+item.icon" :label="item.label" class="btn" :key="item.id" @click="goToLocation(item.anchor)"/>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    --btn-background: linear-gradient(90deg, var(--background-clr) 0 1%, var(--blue-light) 0%, var(--background-clr) 50%);

    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20%;
}

.btn {
    text-align: left;
    background: var(--btn-background);
    border: none;
    background-size: 200% 100%;
    background-position: 100% 0;
    font-size: 1.4rem;
    transition: background-position .6s ease-in;
}

.btn:enabled:hover, .btn:enabled:focus, .btn:enabled:active  {
    background: var(--btn-background);
    background-size: 200% 100%;
    background-position: 2% 0;
    transition: background-position .3s cubic-bezier(1,-0.06,.31,.9);
    box-shadow: none;
}

.navbar-title {
    color: var(--foreground-clr);
    font-size: 2.5rem;
    text-align: center;
}

</style>
