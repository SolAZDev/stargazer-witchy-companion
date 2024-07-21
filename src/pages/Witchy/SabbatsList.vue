<template lang="pug">
q-page(padding)
  .column.q-gutter-y-md
    .text-center
      .text-h4 Sabbats
      .text-subtitle2 Sabbats are Pagan Holidays. There are 8 known sabbats in what is known as the Wheel of the Year.

    q-img(src='/info/sabbats/images/WheelOfTheYear.jpg', :ratio='1/1', spinner-color='primary', spinner-size='82px' style="max-height:15vh" fit="contain")

    q-list(bordered, separator)
      q-item(clickable, v-ripple v-for="(sabbat, index) in sabbatsList" :key="index" :to="'/sabbats/'+index")
        q-item-section
          q-item-label {{ sabbat.name }}
          q-item-label(caption) {{redableDates(sabbat,false)}}
          q-item-label(caption) {{redableDates(sabbat,true)}}
</template>
<script lang="ts" setup>
import { convertToReadableDate } from 'src/api/utils';
import sabbats from 'src/data/sabbats';
import type { SabbatInfo } from 'src/models/witchy.model';
import { computed, ref } from 'vue';

const sabbatsList = ref(sabbats);
function redableDates(sabbat: SabbatInfo, south: false) {
  const dateArr = south ? sabbat.southDates : sabbat.northDates;
  let returnable = south ? 'South Hemishpere: ' : 'North Hemisphere: ';
  dateArr.forEach((date, i) => {
    returnable += convertToReadableDate(date);
    if (i < dateArr.length - 1) returnable += ' - ';
  });
  return returnable;
}
</script>
