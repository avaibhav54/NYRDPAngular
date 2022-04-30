import { FormControl } from '@angular/forms';

export interface questionControls {
  question: any;
  control: FormControl;
  resHistoryControl: Array<ResHistoryControls>;
}
export interface ResHistoryControls {
  resolution: FormControl;
  successRate: FormControl;
}
