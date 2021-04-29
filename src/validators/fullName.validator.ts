import { AbstractControl, ValidatorFn } from "@angular/forms";

export function fullNameValidator(): ValidatorFn {
  return (
    control: AbstractControl,
  ): { [key: string]: boolean } | null => {
    const lastName = control.value.lastName,
      firstName = control.value.firstName,
      patronymic = control.value.patronymic;

    if (!lastName && !firstName) {
      const valid = !control.value || (lastName !== firstName !== patronymic);

      return valid ? null : {fullName: true};
    }
  };
}
