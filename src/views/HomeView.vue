<script setup lang="ts">
import HeroComponent from '@components/home/HeroComponent.vue'
import AboutComponent from '@components/home/AboutComponent.vue'
import ExperienceComponent from '@components/home/ExperienceComponent.vue'
import SkillsComponent from '@components/home/SkillsComponent.vue'
import ContactComponent from '@/components/home/ContactComponent.vue'
</script>

<template>
  <main id="home-view">
    <HeroComponent />
    <AboutComponent />
    <ExperienceComponent />
    <SkillsComponent />
    <ContactComponent />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Doto:wght,ROND@600,50&display=swap');

#home-view {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100dvh, auto);
  place-items: stretch;
  place-content: stretch;
  gap: 0;
}

.section-title {
  --title-min-size: 3.5rem;
  --title-target-size: 7dvw;
  --title-max-size: 6rem;

  font-family: 'Doto', 'Roboto', sans-serif;
  font-size: clamp(var(--title-min-size), var(--title-target-size), var(--title-max-size));
  margin: 0;
}
</style>
