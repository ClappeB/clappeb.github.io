<script setup lang="ts">
import Button from "primevue/button";
</script>

<template>
    <section class="home">
        <div>
            <p class="name">Bruno</p>
            <p class="surname">Clappe</p>
            <p class="subheading">CLI-lover & code beauty seeker</p>
        </div>
        <div class="logos">
            <a class="logo" href="https://github.com/ClappeB" target="_blank">
                <img defer src="/images/github.png" alt="Github logo" />    
            </a>
            <a class="logo" href="https://www.linkedin.com/in/bruno-clappe/" target="_blank">
                <img defer src="/images/64linkedin.png" alt="LinkedIn logo" />
            </a>
        </div>
        <div>
            <img defer src="/images/double_arrows.png" class="scrolldown" />
        </div>
    </section>
</template>

<style>

.home {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20vh 5vw;
    text-align: center;
}

.name {
    font-size: 4rem;
    margin: -1.5rem 0;
    z-index: 1;
}

.surname {
    font-size: 5rem;
    margin: -4rem 0 0 0;
    color: var(--blue-light);
}

.subheading {
    font-size: 1.5rem;
    font-style: italic;
    margin: -1rem 0 0 0;
}

.logos {
    display: flex;
    gap: 2rem;
}

.logo {
    border-radius: 50%;
    background: white;
    padding: 0.5rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logo img {
    width: 48px;
    height: 48px;
    display: block;
}

.scrolldown {
    animation: 5s cubic-bezier(.03,.24,.25,1) 0s infinite bounce;
}

@keyframes bounce{
    35% {
        transform: translateY(30px);
    }
    70% {
        transform: translateY(0);
    }
}
</style>