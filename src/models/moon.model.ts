//#region iCalendar
export interface iCalendarMoonData {
  monthName: string;
  firstDayMonth: string;
  daysMonth: string;
  nameDay: string[];
  nameMonth: string[];
  phase: PhaseData[];
  month: number;
  year: number;
  receivedVariables: ReceivedVariables | null;
  lang: string;
  language: string;
  title: string[];
  nextFullMoon: string;
  autor: string;
  version: string;
}

export interface PhaseData {
  phaseName: string;
  isPhaseLimit: number | boolean;
  lighting: number;
  svg: string;
  svgMini: string;
  timeEvent: string;
  dis: number;
  dayWeek: number;
  npWidget: string;
}

export interface ReceivedVariables {
  lang: string;
  month: string;
  year: string;
  size: string;
  lightColor: string;
  shadeColor: string;
  sizeQuarter: string;
  texturize: string;
  LDZ: string;
}
//#endregion

//#region US Navy
export interface USNavyMoonData {
  apiversion: string;
  numphases: number;
  phasedata: USNavyMoonDataData[];
  year: number;
}

export interface USNavyMoonDataData {
  day: number;
  month: number;
  phase: string;
  time: string;
  year: number;
}
//#endregion
