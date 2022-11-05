<script setup lang="ts">
import { useAppStore } from "@/stores/app_store";

const store = useAppStore();
</script>

<template>
  <section id="contact">
    <div>
      <h2 class="section-title">Contact me</h2>
    </div>
    <div>
      <p class="contact-intro">If you want to get in touch with me, feel free to:</p>
      <div class="contact-ways">
        <a v-for="(contactway, index) in store.contactPage.contactWays" :key="index" class="contact-way" :href="contactway.link">
          <img v-if="contactway.image" :src="contactway.image" />
          <p>{{ contactway.calltoaction }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#contact {
  background-color: var(--blue);
  color: var(--foreground-clr-inv);
  display: flex;
  flex-direction: column;
  padding: 3vh 5vh;
  justify-content: center;
  text-align: center;
}

.section-title {
  font-size: clamp(3rem, 10vw, 6rem);
  margin-bottom: 6vh;
  color: var(--blue-light);
}

.contact-intro {
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-style: italic;
  margin-bottom: 10vh;
}

.contact-ways {
  display: flex;
  justify-content: space-around;
}

.contact-way {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 3px transparent solid;
  cursor: pointer;
  color: var(--foreground-clr-inv);
  min-width: 140px;
  padding: 1rem;
  font-size: 1.2rem;

  &:hover {
    border-radius: 1rem;
    border: 3px solid var(--blue-green);
    border-top: none;
    border-bottom: none;
  }

  & > img {
    display: block;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
  }
}
</style>
