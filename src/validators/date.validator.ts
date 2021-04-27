import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    let accountRgEx: RegExp = /^[0-9]{20}(?!.)/
    let valid =
      !control.value || accountRgEx.test(control.value)
    return valid ? null : { account: true };
  };
}
