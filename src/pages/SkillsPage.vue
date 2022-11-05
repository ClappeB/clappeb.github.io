<script setup lang="ts">
import { ref } from "vue";
import Chart from "primevue/chart";
import { FilterMatchMode } from "primevue/api";
import Column from "primevue/column";
import MultiSelect from "primevue/multiselect";
import InputText from "primevue/inputtext";
import TriStateCheckbox from "primevue/tristatecheckbox";
import DataTable from "primevue/datatable";

import { useAppStore } from "@/stores/app_store";

const store = useAppStore();

const chartData = store.skillsPage.chart.data;
const chartOptions = store.skillsPage.chart.options;

const skills = ref(store.skillsPage.skills);

const uniqueUses = new Set<string>();
const uniqueFields = new Set<string>();
skills.value.forEach((skill) => {
  uniqueFields.add(skill.field);
  skill.use.forEach((use) => uniqueUses.add(use));
});

const uses = ref(Array.from(uniqueUses));
const fields = ref(Array.from(uniqueFields));

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  skill: { value: null, matchMode: FilterMatchMode.GREATER_THAN_OR_EQUAL_TO },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  field: { value: null, matchMode: FilterMatchMode.IN },
  use: { value: null, matchMode: FilterMatchMode.CONTAINS },
  framework: { value: null, matchMode: FilterMatchMode.EQUALS },
});
</script>

<template>
  <section id="skills">
    <div>
      <h2 class="section-title">My skills</h2>
    </div>
    <div class="skills-place">
      <div class="chart-wrapper">
        <chart type="polarArea" :data="chartData" :options="chartOptions" class="chart" />
      </div>
      <div class="skills-review">
        <div class="card datatable-wrapper">
          <DataTable
            :value="skills"
            :paginator="true"
            class="p-datatable p-datatable-responsive-scroll datatable"
            :rows="10"
            dataKey="name"
            v-model:filters="filters"
            filterDisplay="row"
            responsiveLayout="scroll"
            :globalFilterFields="['name', 'field', 'use', 'framework']">
            <template #header>
              <div class="global-search">
                <p class="global-indicator">Search any keyword</p>
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                </span>
              </div>
            </template>
            <template #empty> No skills found yet... </template>
            <template #loading> Loading skills data. Please wait. </template>
            <Column field="skill" header="Skill" dataType="number" style="min-width: 4rem">
              <template #body="{ data }">
                {{ data.skill }}
                <i class="pi pi-star-fill star" />
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <InputText type="number" min="0" max="5" step="0.5" v-model="filterModel.value" @change="filterCallback()" class="p-column-filter inputfield" :placeholder="'0'" />
              </template>
            </Column>
            <Column field="name" header="Name" style="min-width: 12rem">
              <template #body="{ data }">
                {{ data.name }}
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Name `" />
              </template>
            </Column>
            <Column header="Field" filterField="field" style="min-width: 12rem">
              <template #body="{ data }">
                <span class="image-text">{{ data.field }}</span>
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="fields" placeholder="Any" class="p-column-filter">
                  <template #option="slotProps">
                    <div class="p-multiselect-representative-option">
                      <span>{{ slotProps.option }}</span>
                    </div>
                  </template>
                </MultiSelect>
              </template>
            </Column>
            <Column header="Use" filterField="use" style="min-width: 12rem">
              <template #body="{ data }">
                <span>{{ data.use.join(", ") }}</span>
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <MultiSelect v-model="filterModel.value" @change="filterCallback()" :options="uses" placeholder="Any" class="p-column-filter">
                  <template #option="slotProps">
                    <div class="p-multiselect-representative-option">
                      <span>{{ slotProps.option }}</span>
                    </div>
                  </template>
                </MultiSelect>
              </template>
            </Column>
            <Column field="framework" header="Framework" dataType="boolean" style="min-width: 6rem">
              <template #body="{ data }">
                <i class="pi" :class="{ 'true-icon pi-check-circle': data.framework, 'false-icon pi-times-circle': !data.framework }"></i>
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <TriStateCheckbox v-model="filterModel.value" @change="filterCallback()" />
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#skills {
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3vh 5vw;
  height: fit-content;
}

.section-title {
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 6vh;
  color: var(--blue-light);
}

.skills-place {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  max-width: 100vw;
}

.skills-review {
  min-width: 100%;
  max-width: 100vw;
}

.datatable-wrapper {
  overflow: auto;
  max-width: 100vw;
}

.chart-wrapper {
  width: clamp(400px, 50vw, 680px);
  height: clamp(400px, 50vw, 680px);
  margin-bottom: 5vh;
  max-width: 100vw;
  overflow: hidden;
}

.datatable {
  min-width: 100%;
}

.global-search {
  display: flex;
  flex-direction: column;
  width: 100%;

  & > p {
    font-size: 1.25rem;
    font-weight: bold;
  }

  & * {
    width: 100%;
  }

  & i {
    z-index: 5;
  }
}

.star {
  color: rgb(240, 240, 0);
}

.inputfield {
  min-width: clamp(60px, 15vw, 120px);
}

@media (max-width: 360px) {
  #skills {
    padding: 3vh 0;
  }
}

@media (max-width: 767px) {
  .chart-wrapper {
    margin-bottom: 0;
  }
}

@media (min-width: 768px) {
  .picklist {
    max-width: 50%;
  }
}

::v-deep(.p-paginator) {
  .p-paginator-current {
    margin-left: auto;
  }
}

::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #d8dadc;

  .p-progressbar-value {
    background-color: #607d8b;
  }
}

::v-deep(.p-datepicker) {
  min-width: 25rem;

  td {
    font-weight: 400;
  }
}

::v-deep(.p-datatable.p-datatable-customers) {
  .p-datatable-header {
    padding: 1rem;
    text-align: left;
    font-size: 1.5rem;
  }

  .p-paginator {
    padding: 1rem;
  }

  .p-datatable-thead > tr > th {
    text-align: left;
  }

  .p-datatable-tbody > tr > td {
    cursor: auto;
  }

  .p-dropdown-label:not(.p-placeholder) {
    text-transform: uppercase;
  }
}
</style>
