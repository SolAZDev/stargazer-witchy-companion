<template lang="pug">
q-card.my-card
  q-card-section.text-center(v-if="isUpdating")
    q-spinner-puff(color="primary" size=22)
  q-card-section.text-center(v-if="!isUpdating")
    //- q-img(:src='MoonPhase.svg', :ratio='1/1', spinner-color='primary', spinner-size='82px')
    div
      span(v-html="MoonPhase.svg")
    .text-h6 {{ MoonPhase.npWidget }}
    //- .text-subtitle2 {{ Date }}
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useMoonStore } from 'stores/moon_store';
import { CESTToCurrent } from 'src/api/utils';
const moonStore = useMoonStore();

onMounted(() => {
  moonStore.initialFetch();
  console.log(CESTToCurrent('12:19:50', 21, 7, 2024));
});
const isUpdating = computed(() => moonStore.isUpdating);
const MoonPhase = computed(() => moonStore.todayMoon);
</script>
