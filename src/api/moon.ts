import { useQuasar } from 'quasar';
import { ical_moon_api, usnavy_moon_api } from 'src/boot/axios';

export async function getMoonData(
  month: number = new Date().getUTCMonth() + 1,
  year: number = new Date().getUTCFullYear()
  // svgOptions = false
) {
  try {
    //TODO: Add Customization SVG Later
    const data = await ical_moon_api.get(
      'api/?lang=en&month=' + month + '&year=' + year
    );
    return data.data;
  } catch (error) {
    useQuasar().notify({
      message: 'Error connecting to iConnect API E:' + error,
    });
  }
}

export async function getCurrentMoonStatus() {
  try {
    //TODO: Add Customization SVG Later
    const data = await ical_moon_api.get('/app/now/?lang=en');
    return data.data;
  } catch (error) {
    useQuasar().notify({
      message: 'Error connecting to iConnect API E:' + error,
    });
  }
}

// https://www.icalendar37.net/lunar/api/?lang=en&month=8&year=2024&size=50&lightColor=%23ffffff&shadeColor=%23000000&sizeQuarter=20&texturize=false&LDZ=1722484800&

export async function getNavyMoonDays(
  year: number = new Date().getUTCFullYear()
) {
  try {
    const data = await usnavy_moon_api.get('/year?year=' + year);
    return data.data;
  } catch (error) {
    useQuasar().notify({
      message: 'Error connecting to US Navy API E:' + error,
    });
  }
}
