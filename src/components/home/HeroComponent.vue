<script setup lang="ts">
type SocialImage = { url: string; alt: string; link: string }
const socials: Array<SocialImage> = [
  {
    url: '/images/github-mark.svg',
    alt: 'Github logo',
    link: 'https://github.com/ClappeB',
  },
  {
    url: '/images/linkedin.svg',
    alt: 'LinkedIn logo',
    link: 'https://www.linkedin.com/in/bruno-clappe/',
  },
]
</script>

<template>
  <section id="hero" class="hero-font">
    <div id="heading" class="hero-title-font">
      <p class="name">Bruno</p>
      <p class="surname">Clappe</p>
    </div>
    <div id="sub-hero">
      <p>CLI-lover & code beauty seeker</p>
    </div>
    <div id="logos">
      <a v-for="(img, index) in socials" :key="index" class="logo" :href="img.link" target="_blank">
        <img loading="lazy" :src="img.url" :alt="img.alt" />
      </a>
    </div>
    <div id="scroll-down-arrows">
      <svg view-box="60 60" height="60" width="60" xmlns="http://www.w3.org/2000/svg">
        <g class="arrow arrow1">
          <path d="M 0 0 L 9 0 L 30 24 L 51 0 L 60 0 L 30 36 Z" />
        </g>
        <g class="arrow arrow2">
          <path d="M 0 24 L 9 24 L 30 48 L 51 24 L 60 24 L 30 60 Z" />
        </g>
      </svg>
    </div>
  </section>
</template>

<style scoped lang="scss">
@layer general, specific;

.hero-title-font,
.hero-font {
  font-family: 'Doto', 'Roboto', sans-serif;
  font-style: normal;
  font-optical-sizing: auto;
  font-weight: 900;
}

.hero-font {
  font-weight: 600;
  font-variation-settings: 'ROND' 50;
}

#hero {
  height: 100dvh;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

#sub-hero {
  font-size: clamp(1.4rem, 3.5vw, 3rem);
  margin: 0 10dvw;
}

@layer general {
  p {
    margin: 0;
  }
}

@layer specific {
  .name {
    font-size: clamp(4rem, 10vw, 10rem);
  }

  .surname {
    font-size: clamp(5rem, 15vw, 15rem);
    margin-top: calc(clamp(1.5rem, 4.25vw, 4.5rem) * -1);
  }
}

#logos {
  display: flex;
  gap: 2dvw;
  margin-top: 2dvh;
}

.logo {
  max-height: 64px;
  max-width: 64px;
  fill: var(--p-surface-950);
}

#scroll-down-arrows {
  margin-top: 6dvh;

  & > svg {
    overflow: visible;
  }
}

.arrow {
  --translate-up: -0.2dvh;
  --translate-down: 1dvh;
  --scale-on-up: 1;
  --scale-on-down: 1;

  transform-box: border-box;
  transform-origin: 50% 50%;
  animation: 4s ease-out infinite normal float;
}

.arrow1 {
  --translate-down: 1.2dvh;
  --scale-on-up: 1.1;
  --scale-on-down: 0.9;
}

.arrow2 {
  --scale-on-up: 0.9;
  --scale-on-down: 1.1;
}

@keyframes float {
  0%,
  60% {
    transform: none;
  }
  10% {
    transform: translateY(var(--translate-up)) scale(var(--scale-on-up));
  }
  30% {
    transform: translateY(var(--translate-down)) scale(var(--scale-on-down));
  }
}
</style>
