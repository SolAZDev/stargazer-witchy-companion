<template lang="pug">
q-page(padding)
  .column.q-gutter-y-md
    .text-center
      .text-h6 Dreams
      .text-subtitle1 Record and Journal your dreams, or help a friend!
    .q-px-sm
      DreamSearch
    .row
      .col-lg-3.col-6.column.items-center
        q-btn(color='primary', icon='calendar_today', label='Change date' size="md" stack)
      .col-lg-3.col-6.column.items-center
        q-btn(color='primary', icon='visibility', label='View Dreams' size="md" stack)
      .col-lg-3.col-6.column.items-center
        q-btn(color='primary', icon='notes', label='Open Journal' size="md" stack)
      .col-lg-3.col-6.column.items-center
        q-btn(color='primary', icon='history', label='History' size="md" stack)
</template>
<script lang="ts" setup>
import DreamSearch from 'src/components/Dreams/DreamSearch.vue';
</script>
<style lang="sass">
.q-btn
  width: 90%
  height: 90%
</style>
