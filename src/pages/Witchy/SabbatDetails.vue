<template lang="pug">
q-page(padding)
  q-markdown(:src="content")
</template>
<script lang="ts" setup>
import sabbats from 'src/data/sabbats';
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const sabbat = ref(sabbats[0]);
const content = ref('');
const route = useRoute();
onMounted(() => {
  sabbat.value = sabbats[route.params['id'] as unknown as number];
  getContent();
});

async function getContent() {
  const data = await (await fetch(sabbat.value.content)).text();
  if (data != null) content.value = data as unknown as string;
}
</script>
