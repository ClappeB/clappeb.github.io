<script setup lang="ts">
import Chart from 'primevue/chart'

import Column from 'primevue/column'
import MultiSelect from 'primevue/multiselect'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'
import Checkbox from 'primevue/checkbox'
import DataTable, { type DataTableFilterMeta } from 'primevue/datatable'
import { ref } from 'vue'
import { $dt, definePreset } from '@primeuix/themes'
import { CustomPreset2 } from '@/theme/theme'

type Skill = { name: string; field: string; use: Array<string>; framework: boolean; skill: number }

const chartDescription = {
  chart: {
    data: {
      datasets: [
        {
          data: [3.5, 3, 1.5],
          backgroundColor: ['#FF0000AA', '#FFFF00AA', '#00FF00AA'],
          borderWidth: 0,
          max: 5,
        },
      ],
      labels: ['Development', 'DevOps', 'Security'],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: 'var(--text)',
            font: {
              size: 18,
            },
          },
          position: 'bottom',
        },
      },
      scales: {
        r: {
          grid: {
            color: 'var(--text)',
          },
          ticks: {
            color: 'var(--text)',
            count: 6,
            stepSize: 1,
            z: 10,
            showLabelBackdrop: false,
            font: {
              size: 25,
            },
          },
          suggestedMax: 5,
        },
      },
    },
  },
}

const skills: Array<Skill> = [
  { name: 'Go', field: 'Development', use: ['Backend', 'Standalone'], framework: false, skill: 4 },
  {
    name: 'Javascript',
    field: 'Development',
    use: ['Frontend', 'Backend'],
    framework: false,
    skill: 4,
  },
  { name: 'CSS', field: 'Development', use: ['Frontend'], framework: false, skill: 4 },
  { name: 'HTML', field: 'Development', use: ['Frontend'], framework: false, skill: 3.5 },
  {
    name: 'Kubernetes',
    field: 'DevOps',
    use: ['Infrastructure as Code', 'Deployment'],
    framework: false,
    skill: 3.5,
  },
  {
    name: 'Java',
    field: 'Development',
    use: ['Backend', 'Standalone'],
    framework: false,
    skill: 3,
  },
  { name: 'SCSS', field: 'Development', use: ['Frontend'], framework: false, skill: 3 },
  { name: 'VueJS', field: 'Development', use: ['Frontend'], framework: true, skill: 3 },
  { name: 'ReactJS', field: 'Development', use: ['Frontend'], framework: true, skill: 3 },
  { name: 'Linux', field: 'System', use: ['OS'], framework: false, skill: 3 },
  { name: 'MySQL', field: 'Database', use: ['SQL'], framework: false, skill: 3 },
  { name: 'Ionic', field: 'Development', use: ['Frontend'], framework: true, skill: 2.5 },
  {
    name: 'Python',
    field: 'Development',
    use: ['Scripting', 'Standalone'],
    framework: false,
    skill: 2.5,
  },
  {
    name: 'Typescript',
    field: 'Development',
    use: ['Frontend', 'Backend'],
    framework: false,
    skill: 2.5,
  },
  { name: 'Docker', field: 'DevOps', use: ['Containers'], framework: false, skill: 2.5 },
  { name: 'ScyllaDB', field: 'Database', use: ['NoSQL'], framework: false, skill: 2 },
  { name: 'Podman', field: 'DevOps', use: ['Containers'], framework: false, skill: 2 },
  { name: 'MongoDB', field: 'Database', use: ['NoSQL'], framework: false, skill: 2 },
  { name: 'C#', field: 'Development', use: ['Standalone'], framework: false, skill: 2 },
  {
    name: 'Unity',
    field: 'Development',
    use: ['Standalone', 'Virtual Reality', 'Augmented Reality'],
    framework: false,
    skill: 2,
  },
  { name: 'Bash', field: 'System', use: ['Scripting'], framework: false, skill: 1.5 },
  { name: 'Windows', field: 'System', use: ['OS'], framework: false, skill: 1.5 },
  { name: 'Redis', field: 'Database', use: ['NoSQL'], framework: false, skill: 1 },
]

const uniqueUses = new Set<string>()
const uniqueFields = new Set<string>()
skills.forEach((skill) => {
  uniqueFields.add(skill.field)
  skill.use.forEach((use) => uniqueUses.add(use))
})

const uses = ref(Array.from(uniqueUses))
const fields = ref(Array.from(uniqueFields))

const filters = ref<DataTableFilterMeta>({
  global: { value: null, matchMode: 'contains' },
  skill: { value: null, matchMode: 'gte' },
  name: { value: null, matchMode: 'startsWith' },
  field: { value: null, matchMode: 'in' },
  use: { value: null, matchMode: 'contains' },
  framework: { value: null, matchMode: 'equals' },
})
</script>

<template>
  <section id="skills" class="p-inverted">
    <div>
      <h2 class="section-title">My skills</h2>
    </div>
    <div class="chart-wrapper">
      <Chart
        type="polarArea"
        :data="chartDescription.chart.data"
        :options="chartDescription.chart.options" />
    </div>
    <div class="skills-review">
      <DataTable
        :value="skills"
        :rows="10"
        :paginator="true"
        dataKey="name"
        v-model:filters="filters"
        filterDisplay="row"
        responsiveLayout="scroll"
        :globalFilterFields="['name', 'field', 'use', 'framework']">
        <template #header>
          <div class="global-search">
            <IconField>
              <InputIcon>
                <i class="pi pi-search" />
              </InputIcon>
              <!-- <InputText v-model="filters['global'].value" placeholder="Keyword Search" /> -->
            </IconField>
          </div>
        </template>
        <template #empty> No skills found yet... </template>
        <template #loading> Loading skills data. Please wait. </template>

        <Column field="skill" header="Skill" dataType="number" :show-filter-menu="false">
          <template #body="{ data }">
            {{ data.skill }}
            <i class="pi pi-star-fill star" />
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              type="number"
              min="0"
              max="5"
              step="0.5"
              v-model="filterModel.value"
              @change="filterCallback()"
              class="p-column-filter inputfield"
              :placeholder="'0'" />
          </template>
        </Column>

        <Column field="name" header="Name">
          <template #body="{ data }">
            {{ data.name }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              type="text"
              v-model="filterModel.value"
              @keyup="filterCallback()"
              @keydown.enter="filterCallback()"
              :placeholder="'Name'" />
          </template>
        </Column>

        <Column header="Field" filterField="field" :show-filter-menu="false">
          <template #body="{ data }">
            <span class="image-text">{{ data.field }}</span>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <MultiSelect
              v-model="filterModel.value"
              @change="filterCallback()"
              :options="fields"
              :show-toggle-all="false"
              placeholder="Any">
              <template #option="slotProps">
                <div class="p-multiselect-representative-option">
                  <span>{{ slotProps.option }}</span>
                </div>
              </template>
            </MultiSelect>
          </template>
        </Column>

        <Column header="Use" filterField="use" :show-filter-menu="false">
          <template #body="{ data }">
            <span>{{ data.use.join(', ') }}</span>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <MultiSelect
              v-model="filterModel.value"
              @change="filterCallback()"
              :options="uses"
              :show-toggle-all="false"
              placeholder="Any">
              <template #option="slotProps">
                <div>
                  <span>{{ slotProps.option }}</span>
                </div>
              </template>
            </MultiSelect>
          </template>
        </Column>

        <Column field="framework" header="Framework" dataType="boolean" :show-clear-button="true">
          <template #body="{ data }">
            <i
              class="pi"
              :class="{
                'true-icon pi-check-circle': data.framework,
                'false-icon pi-times-circle': !data.framework,
              }"></i>
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <Checkbox v-model="filterModel.value" @change="filterCallback()" binary />
          </template>
        </Column>
      </DataTable>
    </div>
  </section>
</template>

<style scoped lang="scss">
#skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8vh;
  padding: 20px 0;
}

.skills-review {
  width: 80dvw;
  overflow: auto;
  border-radius: 20px;
}

.chart-wrapper {
  width: clamp(300px, 50vw, 680px);
  height: clamp(300px, 50vw, 680px);
}

.star {
  color: rgb(240, 240, 0);
}

@media (max-width: 767px) {
  .skills-review {
    width: 90dvw;
  }
}

@media (max-width: 575px) {
  .skills-review {
    width: 95dvw;
  }
}
</style>
