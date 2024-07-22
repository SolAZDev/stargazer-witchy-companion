<template lang="pug">
q-page(padding)
  .column
    .row
      .col-12.col-sm-6
        MoonCardVue

    .text-center
      .text-h6 Tools and Information
    .column.q-gutter-y-md
      q-card(@click="toUrl('/sabbats')")
        q-card-section.q-pa-sm(horizontal style="min-height:150px")
          q-img.col-3(src='/info/sabbats/images/WheelOfTheYear.jpg', ratio='1/1', spinner-color='primary', spinner-size='82px' fit="contain")
          q-card-section.col.text-right
            .text-h6 Sabbats
            .text-subtitle2 Pagan Holidays

      q-card(@click="toUrl('/dreams')")
        q-card-section.q-pa-sm(horizontal style="min-height:150px")
          q-img.col-3(src='/info/sabbats/images/WheelOfTheYear.jpg', ratio='1/1', spinner-color='primary', spinner-size='82px' fit="contain")
          q-card-section.col.text-right
            .text-h6 Dreams
            .text-subtitle2 Dictionary and Journal
</template>
<script lang="ts" setup>
import MoonCardVue from 'components/Cards/MoonCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function toUrl(link: string) {
  router.push(link);
}
</script>
