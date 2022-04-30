import { FormControl } from '@angular/forms';

export interface User {
  id: number;
  name: string;
  ageGroupId: number;
  gender: string;
  personalityId: number;
  sleepHabit: string;
  spendWeekend: string;
  modeOfPayment: string;
  exerciseRegularly: boolean;
  occupationId: number;
  freeTimeId: number;
  history: Array<ResHistory>;
}
export interface ResHistory {
  id: number;
  resolutionId: number;
  successRateId: number;
}
