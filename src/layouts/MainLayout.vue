<template lang="pug">
q-layout(view='hHh lpR fFf')
    q-header.bg-primary.text-white(elevated)
      q-toolbar
        q-btn(dense='' flat='' round='' icon='menu' @click='toggleLeftDrawer')
          q-toolbar-title Stargazer's Witchy Companion
    q-drawer(v-model='leftDrawerOpen' side='left' overlay elevated)
      q-list(bordered)
        q-item(clickable, v-ripple)
          q-item-section(avatar)
            q-icon(color='primary', name='bluetooth')
          q-item-section Icon as avatar
    q-page-container
      router-view
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'MainLayout',
});

const leftDrawerOpen = ref(false);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
