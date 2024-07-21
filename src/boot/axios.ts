import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
    $ical_moon_api: AxiosInstance;
    $usnavy_moon_api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'https://api.example.com' });
const ical_moon_api = axios.create({
  baseURL: 'https://www.icalendar37.net/lunar/',
});
const usnavy_moon_api = axios.create({
  baseURL: 'https://aa.usno.navy.mil/api/moon/phases',
});

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;

  app.config.globalProperties.$api = api;
  app.config.globalProperties.$ical_moon_api = ical_moon_api;
  app.config.globalProperties.$usnavy_moon_api = usnavy_moon_api;
});

export { api, ical_moon_api, usnavy_moon_api };
