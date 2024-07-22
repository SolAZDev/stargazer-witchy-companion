<template lang="pug">
q-page(padding)
  .column.q-gutter-y-md
    //- .row
    //-   .col-1
    //-     q-btn(color='primary', flat icon='arrow_back', @click='GoToDreamMain()')
    //-   .col
    DreamSearch
    .row
      .col
        .text-h4 {{ symbol.symbol }}
        small Dream Symbol

      .col-2
        q-btn(color='green', icon='save')
    q-list
      q-item(v-for="(meaning, index) in symbol.meanings")
        q-item-section
          p {{ index+1 }}. {{ meaning }}
</template>
<script lang="ts" setup>
import { getDream } from 'src/api/dreams';
import DreamSearch from 'src/components/Dreams/DreamSearch.vue';
import type { DreamSymbol } from 'src/models/dreams.model';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const symbol = ref({
  id: -1,
  meanings: ['Your mom.'],
  symbol: 'Joe',
} as DreamSymbol);
const route = useRoute();
const router = useRouter();

onMounted(() => {
  updateData();
  router.afterEach((to, from): any => {
    if (to.fullPath.includes('/symbols/')) {
      updateData();
    }
  });
});
function updateData() {
  symbol.value = getDream(route.params['id'] as unknown as number);
}
function GoToDreamMain() {
  router.push('/dreams');
}
</script>
