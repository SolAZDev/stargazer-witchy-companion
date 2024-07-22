<template lang="pug">
q-select(v-model='selected', use-input, clearable, emit-value, map-options
  :options='filtered', :loading="loading",
  @virtual-scroll="onScroll", @filter="filterFn"
  @update:model-value="GoToDream"
  label='Search Dream Symbols', filled)
  template(v-slot:no-option)
    q-item
      q-item-section No Results
</template>
<script lang="ts" setup>
import { SearchableDreamsDictionary } from 'src/api/dreams';
import { nextTick } from 'vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const selected = ref(null);
const search = ref('');
const router = useRouter();

const nextPage = ref(2);
const loading = ref(false);
const lastPage = Math.ceil(SearchableDreamsDictionary.length / 50);

const filtered = computed(() => {
  return SearchableDreamsDictionary.filter((dream) =>
    dream.label.toLowerCase().startsWith(search.value.trim())
  ).slice(0, 50 * nextPage.value - 1);
});
function GoToDream(id: any) {
  // console.log(id);
  router.push('/dreams/symbols/' + id);
}
function filterFn(val: string, update: any) {
  setTimeout(() => {
    update(() => {
      nextPage.value = 2;
      search.value = val.toLowerCase();
    });
  }, 100);
}
function onScroll({ to, ref }: any) {
  const lastIndex = filtered.value.length - 1;
  if (!loading.value && nextPage.value < lastPage && to == lastIndex) {
    setTimeout(() => {
      nextPage.value++;
      nextTick(() => {
        ref.refresh();
        loading.value = false;
      });
    }, 100);
  }
}
</script>
