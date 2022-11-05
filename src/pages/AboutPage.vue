<script setup lang="ts">
import Button from "primevue/button";

const descriptions = [
  "My name is Bruno Clappe. I am a software engineer attracted toward DevOps. I am a graduate of CESI with a master’s degree in software development.",
  "Enthusiast learner, I aim at providing great code and giving it the possibility to easily flow.",
];
</script>

<template>
  <section id="about">
    <div>
      <h2 class="section-title">About me</h2>
    </div>
    <div class="photo">
      <img defer src="/images/profil.jpg" />
    </div>
    <div class="description">
      <p v-for="(desc, index) in descriptions" :key="index">{{ desc }}</p>
    </div>
    <Button type="button" class="resume-btn" label="Resume" icon="pi pi-download" />
  </section>
</template>

<style scoped>
#about {
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  padding: 3vh 5vh;
  justify-content: center;
}

.section-title {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 6vh;
  color: var(--blue-light);
}

.photo {
  display: flex;
  justify-content: center;
  margin-bottom: 4vh;
}

.photo img {
  border-radius: 50%;
  display: block;
  max-width: 150px;
  max-height: 150px;
  box-shadow: 0px 0px 10px 1px var(--blue-light);
}

.description {
  text-align: justify;
  font-size: 1.1rem;
  margin-bottom: 5.4vh;
  line-height: 1.4rem;
  color: var(--foreground-clr-inv);
}

.description > p:not(:last-child) {
  margin-bottom: 0.5rem;
}

.resume-btn {
  background-color: var(--blue-green);
  border: none;
}

@media (min-width: 768px) {
  .description {
    text-align: center;
  }

  .photo img {
    max-width: clamp(150px, 25vw, 400px);
    max-height: clamp(150px, 25vh, 400px);
    aspect-ratio: 1 1;
  }

  .section-title {
    font-size: clamp(3.5rem, 8vw, 6rem);
  }
}

</style>
