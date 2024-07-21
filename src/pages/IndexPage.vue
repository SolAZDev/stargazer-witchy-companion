<template>
  <q-page class="row items-center justify-evenly">
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
// import type { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
import { getMoonData, getNavyMoonDays } from 'src/api/moon';

defineOptions({
  name: 'IndexPage',
});

onMounted(async () => {
  console.log(await getMoonData());
  console.log(((await getNavyMoonDays()) as any).phasedata);
});
const todos = ref([
  {
    id: 1,
    content: 'ct1',
  },
  {
    id: 2,
    content: 'ct2',
  },
  {
    id: 3,
    content: 'ct3',
  },
  {
    id: 4,
    content: 'ct4',
  },
  {
    id: 5,
    content: 'ct5',
  },
]);

const meta = ref({
  totalCount: 1200,
});
</script>
