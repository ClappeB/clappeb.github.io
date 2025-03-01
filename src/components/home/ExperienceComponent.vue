<script setup lang="ts">
import Chip from 'primevue/chip'

type Experience = {
  jobTitle: string
  location: string
  technologies: Array<string>
  company: string
  startDate: string
  endDate: string
}

const experiences: Array<Experience> = [
  {
    jobTitle: 'R&D Engineer',
    location: 'Lyon, France',
    technologies: ['TypeScript', 'Python', 'Github Actions', 'Bash', 'Powershell'],
    company: 'Ansys',
    startDate: '09/2023',
    endDate: 'Present',
  },
  {
    jobTitle: 'IT association president',
    location: 'Lyon, France',
    technologies: ['Javascript', 'Proxmox', 'Docker', 'Python'],
    company: 'Coding Cartel',
    startDate: '02/2022',
    endDate: '07/2023',
  },
  {
    jobTitle: 'Backend developer',
    location: 'Copenhagen, Denmark',
    technologies: ['Go', 'BigQuery', 'API', 'Redis'],
    company: 'Wult',
    startDate: '09/2021',
    endDate: '02/2022',
  },
  {
    jobTitle: 'Backend developer',
    location: 'Montpellier, France',
    technologies: ['Java', 'Qlik'],
    company: 'Berger-Levrault',
    startDate: '01/2021',
    endDate: '04/2021',
  },
]
</script>

<template>
  <section id="experience-section">
    <h2 class="section-title title">My Experiences</h2>
    <div class="experiences">
      <div v-for="(experience, index) in experiences" :key="index" class="experience">
        <div class="title">
          <p class="job-title">{{ experience.jobTitle }}</p>
          <p class="job-dates">{{ experience.startDate }} - {{ experience.endDate }}</p>
        </div>
        <div>
          <p class="job-location">{{ experience.company }} - {{ experience.location }}</p>
        </div>
        <div class="technologies">
          <Chip v-for="tech in experience.technologies" :key="tech" :label="tech" class="chip" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
#experience-section {
  display: flex;
  flex-direction: column;
  gap: 6dvh;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.title {
  --title-min-size: 2.7rem;
}

.experiences {
  margin: 0 20px;
  display: grid;
  gap: clamp(20px, 5dvw, 40px);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  place-content: center;
}

@media (max-width: 800px) {
  .experiences {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
}

.experience {
  border: 8px var(--p-primary-900) solid;
  border-radius: 30px;
  border-top: none;
  border-bottom: none;
  background-color: var(--p-surface-950);
  padding: 2rem 1rem;
  // box-shadow:
  //   10px 10px 20px -18px var(--p-primary-200),
  //   -10px -10px 20px -18px var(--p-secondary-200);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;

  & p {
    padding: 0;
    margin: 0;
  }
}

.title {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.job-title {
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
}

.job-dates {
  color: var(--p-text-muted-color);
}

.job-location {
  font-style: italic;
  font-size: 1.1rem;
}

.technologies {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
}

.chip {
  padding: 5px 15px;
}
</style>
