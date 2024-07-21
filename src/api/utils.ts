import { useQuasar } from 'quasar';

export const $q = useQuasar();

/**
 * For Use with US Navy Moon Data, date is optional
 * @param hour - Hour in HH:MM:SS format, seconds optional
 * @param day
 * @param month
 * @param year
 * @returns
 */
export function UTCToCurrent(
  hour: string,
  day: number = new Date().getDay() + 1,
  month: number = new Date().getMonth() + 1,
  year: number = new Date().getFullYear()
) {
  return new Date(month + '/' + day + '/' + year + ' ' + hour + ' UTC');
}

/**
 * For Use with iCalendar37's Moon Data, date is optional
 * @param hour - Hour in HH:MM:SS format, seconds optional
 * @param day
 * @param month
 * @param year
 * @returns
 */
export function CESTToCurrent(
  hour: string,
  day: number = new Date().getDay(),
  month: number = new Date().getMonth(),
  year: number = new Date().getFullYear()
) {
  return new Date(month + '/' + day + '/' + year + ' ' + hour + ' UTC+2');
}

export function convertToReadableDate(date: { month: number; day: number }) {
  const returnable = new Date();
  returnable.setMonth(date.month - 1);
  returnable.setDate(date.day);
  return returnable.toDateString();
}
