import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateValidator(): ValidatorFn {
  return (
    control: AbstractControl,
  ): { [key: string]: boolean } | null => {
    if (control.value) {
      const NOW = new Date();
      const TODAY = new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate());
      const DOB_ARR = control.value.split("-");
      const DOB = new Date(DOB_ARR[0], DOB_ARR[1], DOB_ARR[2]);
      const DOBdate = new Date(DOB.getFullYear(), DOB.getMonth(), DOB.getDate());
      let AGE = TODAY.getFullYear() - DOB.getFullYear();

      if (TODAY < DOBdate) {
        AGE--;
      }


      const valid = !control.value || AGE > 10;
      return valid ? null : {date: true};
    }
  };
}
