<script setup lang="ts">
import { ref, onMounted } from "vue";
import Chart from "primevue/chart";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import Dropdown from "primevue/dropdown";
import Column from "primevue/column";
import MultiSelect from "primevue/multiselect";
import InputText from "primevue/inputtext";
import TriStateCheckbox from "primevue/tristatecheckbox";
import DataTable from "primevue/datatable";

const chartData = ref({
  datasets: [
    {
      data: [4, 3.5, 2.5, 2.5, 2],
      backgroundColor: ["#FF0000AA", "#FFFF00AA", "#00FF00AA", "#0080FFAA", "#8000FFAA"],
      borderWidth: 0,
      label: "My skills",
      max: 5,
    },
  ],
  labels: ["Development", "Database", "DevOps", "Network", "Security"],
});

const chartOptions = ref({
  plugins: {
    legend: {
      labels: {
        color: "#fff",
        font: {
          size: 18,
        },
      },
      position: "bottom",
    },
  },
  scales: {
    r: {
      grid: {
        color: "#fff",
      },
      ticks: {
        color: "white",
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
});

type Skill = { name: string; field: string; use: Array<string>; framework: boolean };
const skills = {
  data: [
    { name: "Go", field: "Development", use: ["Backend", "Standalone"], framework: false },
    { name: "Python", field: "Development", use: ["Scripting", "Standalone"], framework: false },
    { name: "Java", field: "Development", use: ["Backend", "Standalone"], framework: false },
    { name: "Javascript", field: "Development", use: ["Frontend", "Backend"], framework: false },
    { name: "Typescript", field: "Development", use: ["Frontend", "Backend"], framework: false },
    { name: "HTML", field: "Development", use: ["Frontend"], framework: false },
    { name: "CSS", field: "Development", use: ["Frontend"], framework: false },
    { name: "SCSS", field: "Development", use: ["Frontend"], framework: false },
    { name: "VueJS", field: "Development", use: ["Frontend"], framework: true },
    { name: "ReactJS", field: "Development", use: ["Frontend"], framework: true },
    { name: "Docker", field: "DevOps", use: ["Containers"], framework: false },
    { name: "Kubernetes", field: "DevOps", use: ["Infrastructure as Code", "Deployment"], framework: false },
    { name: "Podman", field: "DevOps", use: ["Containers"], framework: false },
    { name: "CRI-O", field: "DevOps", use: ["Containers"], framework: false },
    { name: "Bash", field: "System", use: ["Scripting"], framework: false },
    { name: "Windows", field: "System", use: ["OS"], framework: false },
    { name: "Linux", field: "System", use: ["OS"], framework: false },
    { name: "MySQL", field: "Database", use: ["SQL"], framework: false },
    { name: "ScyllaDB", field: "Database", use: ["NoSQL"], framework: false },
    { name: "Redis", field: "Database", use: ["NoSQL"], framework: false },
    { name: "MongoDB", field: "Database", use: ["NoSQL"], framework: false },
    { name: "C#", field: "Development", use: ["Standalone"], framework: false },
    { name: "Unity", field: "Development", use: ["Standalone", "Virtual Reality", "Augmented Reality"], framework: false },
  ] as Array<Skill>,
};

const uniqueUses = new Set<string>();
const uniqueFields = new Set<string>();
skills.data.forEach((skill) => {
  uniqueFields.add(skill.field);
  skill.use.forEach((use) => uniqueUses.add(use));
});

const uses = ref(Array.from(uniqueUses));
const fields = ref(Array.from(uniqueFields));

const customers2 = ref([] as Array<Skill>);
const filters2 = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  field: { value: null, matchMode: FilterMatchMode.IN },
  use: { value: null, matchMode: FilterMatchMode.CONTAINS },
  framework: { value: null, matchMode: FilterMatchMode.EQUALS },
});

onMounted(() => {
  if (!customers2.value) return;
  customers2.value = skills.data;
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
            :value="customers2"
            :paginator="true"
            class="p-datatable p-datatable-responsive-scroll datatable"
            :rows="10"
            dataKey="name"
            v-model:filters="filters2"
            filterDisplay="row"
            responsiveLayout="scroll"
            :globalFilterFields="['name', 'field', 'use', 'framework']">
            <template #header>
              <div class="global-search">
                <span class="p-input-icon-left">
                  <i class="pi pi-search" />
                  <InputText v-model="filters2['global'].value" placeholder="Keyword Search" />
                </span>
              </div>
            </template>
            <template #empty> No customers found. </template>
            <template #loading> Loading customers data. Please wait. </template>
            <Column field="name" header="Name" style="min-width: 12rem">
              <template #body="{ data }">
                {{ data.name }}
              </template>
              <template #filter="{ filterModel, filterCallback }">
                <InputText type="text" v-model="filterModel.value" @keydown.enter="filterCallback()" class="p-column-filter" :placeholder="`Search by name - `" />
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

  & i {
    z-index: 5;
  }
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
