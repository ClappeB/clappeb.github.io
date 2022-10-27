<script setup lang="ts">
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
      <img defer src="https://picsum.photos/300" />
    </div>
    <div class="description">
      <p v-for="(desc, index) in descriptions" :key="index">{{ desc }}</p>
    </div>
  </section>
</template>

<style scoped>
#about {
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  padding: 8vh 5vh;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 6vh;
}

.photo {
  display: flex;
  justify-content: center;
  margin-bottom: 4vh;
}

.photo img {
  border-radius: 50%;
  display: block;
  max-width: 250px;
  max-height: 250px;
  border: dotted var(--blue-light) 2px;
}

.description {
  text-align: justify;
}

.description > p:not(:last-child) {
  margin-bottom: 0.5rem;
}
</style>
