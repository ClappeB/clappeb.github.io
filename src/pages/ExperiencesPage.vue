<script setup lang="ts">
import Chip from "primevue/chip";
import { useAppStore } from "@/stores/app_store";

const store = useAppStore();
</script>

<template>
  <section id="experiences" class="page-section">
    <div>
      <h2 class="section-title">My Experiences</h2>
    </div>
    <div class="experiences">
      <div v-for="(xp, index) in store.experiencesPage.experiences" :key="index" class="experience">
        <div>
          <p class="job-title">{{ xp.jobTitle }}</p>
          <p class="job-dates">{{ xp.startDate }} - {{ xp.endDate }}</p>
        </div>
        <div>
          <p class="job-location">{{ xp.company }} - {{ xp.location }}</p>
        </div>
        <div class="technologies">
          <Chip v-for="tech in xp.technologies" :key="tech" :label="tech" class="chip" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#experiences {
  --foreground-clr: var(--black);
  background-color: white;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 6vh;
  color: var(--black);
}

.experiences {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 100%);
  grid-template-rows: minmax(100px, auto);
}

@media (min-width: 800px) {
  .experiences {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

.experience {
  border: 8px black solid;
  border-radius: 30px;
  border-top: none;
  border-bottom: none;
  padding: 2rem 2rem;
  text-align: center;
  box-shadow: 10px 0 50px -20px var(--black), -10px 0 50px -20px var(--blue-dark);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.job-title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
}

.job-dates {
  color: var(--gray);
  margin-bottom: 0.8rem;
}

.job-location {
  font-style: italic;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}

.technologies {
  display: flex;
  justify-content: center;
  gap: 8px;
  max-width: 100%;
  flex-wrap: wrap;
  height: auto;
  color: var(--foreground-clr-inv);
}

.chip {
  color: var(--foreground-clr-inv);
  background-color: var(--gray);
  padding: 0px 15px;
}
</style>
