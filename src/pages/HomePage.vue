<script setup lang="ts">
type SocialImage = { url: string; alt: string; link: string };
const socials: Array<SocialImage> = [
  { url: "/images/github.png", alt: "Github logo", link: "https://github.com/ClappeB" },
  { url: "/images/64linkedin.png", alt: "LinkedIn logo", link: "https://www.linkedin.com/in/bruno-clappe/" },
];
</script>

<template>
  <section id="home">
    <div>
      <p class="name">Bruno</p>
      <p class="surname">Clappe</p>
      <p class="subheading">CLI-lover & code beauty seeker</p>
    </div>
    <div class="logos">
      <a v-for="(img, index) in socials" :key="index" class="logo" :href="img.link" target="_blank">
        <img loading="lazy" :src="img.url" :alt="img.alt" />
      </a>
    </div>
    <div>
      <img loading="lazy" src="/images/double_arrows_blue.png" class="scrolldown" />
    </div>
  </section>
</template>

<style>
#home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20vh 5vw;
  text-align: center;
}

.name {
  font-size: 4.5em;
  margin: -1.5rem 0;
  z-index: 1;
  color: var(--blue-light);
}

.surname {
  font-size: 5.2rem;
  margin: -4rem 0 0 0;
  color: var(--blue-green);
}

.subheading {
  font-size: 1.5rem;
  font-style: italic;
  margin: -1rem 0 0 0;
  color: var(--foreground-clr-inv);
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.logos {
  display: flex;
  gap: 2rem;
}

.logo {
  border-radius: 50%;
  background: white;
  padding: 0.4rem;
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
  animation: 5s cubic-bezier(0.03, 0.24, 0.25, 1) 0s infinite bounce;
}

@keyframes bounce {
  35% {
    transform: translateY(30px);
  }
  70% {
    transform: translateY(0);
  }
}

@media (min-width: 800px) {
  .name {
    font-size: clamp(4.5rem, 10vw, 8rem);
    margin-bottom: clamp(-7.3rem, -9vw, -1.5rem);
  }
  .surname {
    font-size: clamp(5.2rem, 12vw, 10rem);
  }
  .subheading {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    margin-top: clamp(-1.5rem, -8vw, -0.5rem);
  }
}
</style>
