import type { SabbatInfo } from 'src/models/witchy.model';
export default [
  {
    content: 'info/sabbats/01-Imbolc.md',
    northDates: [
      { month: 2, day: 1 },
      { month: 2, day: 2 },
    ],
    southDates: [
      { month: 8, day: 1 },
      { month: 8, day: 2 },
    ],
    name: 'Imbolc',
  },
  {
    content: 'info/sabbats/02-Ostara.md',
    northDates: [
      { month: 3, day: 20 },
      { month: 3, day: 23 },
    ],
    southDates: [
      { month: 9, day: 20 },
      { month: 9, day: 23 },
    ],
    name: 'Ostara',
  },
  {
    content: 'info/sabbats/03-Beltane.md',
    northDates: [
      { month: 4, day: 30 },
      { month: 5, day: 1 },
    ],
    southDates: [{ month: 10, day: 31 }],
    name: 'Beltane',
  },
  {
    content: 'info/sabbats/04-Litha.md',
    northDates: [
      { month: 6, day: 21 },
      { month: 6, day: 23 },
    ],
    southDates: [{ month: 12, day: 21 }],
    name: 'Litha',
  },
  {
    content: 'info/sabbats/05-Lughnasadh.md',
    northDates: [{ month: 8, day: 1 }],
    southDates: [{ month: 2, day: 1 }],
    name: 'Lughnasadh / Lammas',
  },
  {
    content: 'info/sabbats/06-Mabon.md',
    northDates: [
      { month: 9, day: 20 },
      { month: 9, day: 23 },
    ],
    southDates: [
      { month: 3, day: 20 },
      { month: 3, day: 23 },
    ],
    name: 'Mabon',
  },
  {
    content: 'info/sabbats/07-Samhain.md',
    northDates: [{ month: 10, day: 31 }],
    southDates: [{ month: 5, day: 1 }],
    name: 'Samhain',
  },
  {
    content: 'info/sabbats/08-Yule.md',
    northDates: [
      { month: 12, day: 21 },
      { month: 12, day: 23 },
    ],
    southDates: [
      { month: 6, day: 21 },
      { month: 6, day: 23 },
    ],
    name: 'Yule',
  },
] as SabbatInfo[];
