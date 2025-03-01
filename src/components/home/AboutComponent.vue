<script setup lang="ts">
const descriptions = [
  'My name is Bruno Clappe.',
  "I am a software engineer inclined towards Cloud, CI/CD and DevOps practices, with a master's degree in software development since 2023.",
  'Simplifier & enthusiast learner, I aim at containing complexity behind a silky-smooth interface, both for developers and users.',
]
</script>

<template>
  <section id="about" class="p-inverted">
    <h2 class="section-title">About me</h2>
    <img class="photo" defer src="/images/profil.jpg" />
    <div class="description">
      <p v-for="(desc, index) in descriptions" :key="index">{{ desc }}</p>
    </div>
  </section>
</template>

<style scoped lang="scss">
#about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 5dvh;
}

.photo {
  border-radius: 10px;
  margin-left: auto; /* Centers image */
  margin-right: auto; /* Centers image */
  max-width: 150px;
  max-height: 150px;

  --corner-length: 30px; /* the size on the corner */
  --thickness: 3px; /* the thickness of the border */

  padding: var(--thickness);
  outline: var(--thickness) solid var(--text); /* the color here */
  outline-offset: calc(-1 * var(--thickness));
  mask:
    conic-gradient(at var(--corner-length) var(--corner-length), #0000 75%, #000 0) 0 0 /
      calc(100% - var(--corner-length)) calc(100% - var(--corner-length)),
    conic-gradient(#000 0 0) content-box;
}

.description {
  font-size: 1.2rem;
  line-height: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.description > p {
  margin: 0 10dvw;
  max-width: 600px;
}
</style>
