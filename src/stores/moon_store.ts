import { defineStore } from 'pinia';
import { date } from 'quasar';
import { getMoonData } from 'src/api/moon';
import { iCalendarMoonData } from 'src/models/moon.model';

export const useMoonStore = defineStore('moon', {
  state: () => ({
    iCalMoon: {
      monthName: '',
      firstDayMonth: '',
      daysMonth: '',
      nameDay: [],
      nameMonth: [],
      phase: [],
      month: 0,
      year: 0,
      receivedVariables: null,
      lang: '',
      language: '',
      title: [],
      nextFullMoon: '',
      autor: '',
      version: '',
    } as iCalendarMoonData,
    lastUpdated: null as any as Date,
    lastSetDate: new Date(),
    isUpdating: true,
  }),
  getters: {
    isUpdated: (state) => {
      if (state.lastUpdated != null) {
        return (
          date.getDateDiff(state.lastUpdated, new Date(), 'days') < 1 ||
          new Date().getUTCHours() == 0
        );
      } else return false;
    },
    todayMoon: (state) => {
      const empty = {
        phase: 'Loading',
        svg: '',
      };
      // if (state.iCalMoon == undefined) {
      //   return empty;
      // }
      if (Object.keys(state.iCalMoon.phase).length > 0) {
        return state.iCalMoon.phase[new Date().getDate()];
      } else return empty;
    },
  },
  actions: {
    /**
     * Gets Initial Data from iCal37 if data hasn't been updated.
     */
    async initialFetch() {
      if (!this.isUpdated) {
        this.isUpdating = true;
        const moonData = await getMoonData();
        this.iCalMoon = moonData;
        this.isUpdating = false;
      } else this.isUpdating = true;
    },
    /**
     * Forcefully data from iCal37
     */
    async forceUpdateMoonData() {
      this.isUpdating = true;
      const moonData = await getMoonData();
      this.iCalMoon = moonData;
      this.isUpdating = false;
    },
  },
});
