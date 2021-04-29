import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { dateValidator } from "../../validators/date.validator";
import { fullNameValidator } from "../../validators/fullName.validator";
import { SimpleService } from "../simple.service";
import { Student, StudentList } from "../student-list";

@Component({
  selector: "app-add-and-edit",
  templateUrl: "./add-and-edit.component.html",
  styleUrls: ["./add-and-edit.component.css"]
})
export class AddAndEditComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  activateEditing: boolean;
  activateOfAdd: boolean;
  SL = new StudentList();
  student: Student;
  studentsList: Student[];
  successfully = false;

  formModelEditStudent: FormGroup;
  formModelAddingStudent: FormGroup;

  constructor(
    private readonly simpleService: SimpleService,
  ) {
  }

  ngOnInit(): void {
    this.formModelEditStudent = new FormGroup({
      fullName: new FormGroup({
        lastName: new FormControl("",
          [
            Validators.required,
            Validators.pattern(/^([А-Я]{1}[а-яё\-]{1,23}|[A-Z]{1}[a-z\-]{1,23})?$/),
          ],
        ),
        firstName: new FormControl("",
          [
            Validators.required,
            Validators.pattern(/^([А-Я]{1}[а-яё\-]{1,23}|[A-Z]{1}[a-z\-]{1,23})?$/),
          ],
        ),
        patronymic: new FormControl("")
      }),
      DOB: new FormControl("", [
          Validators.required,
          dateValidator(),
        ],
      ),
      GPA: new FormControl("",
        [
          Validators.required,
          Validators.pattern(/^([2-5]|[2-5]{1}[\.\,]{1}[0-9]{1,2})?$/),
        ],
      )
    });

    this.formModelAddingStudent = new FormGroup({
      fullName: new FormGroup({
        lastName: new FormControl("",
          [
            Validators.required,
            Validators.pattern(/^([А-Я]{1}[а-яё\-]{1,23}|[A-Z]{1}[a-z\-]{1,23})?$/),
          ],
        ),
        firstName: new FormControl("",
          [
            Validators.required,
            Validators.pattern(/^([А-Я]{1}[а-яё\-]{1,23}|[A-Z]{1}[a-z\-]{1,23})?$/),
          ],
        ),
        patronymic: new FormControl("")
      }, [fullNameValidator()]),
      DOB: new FormControl("", [
          Validators.required,
          dateValidator(),
        ],
      ),
      GPA: new FormControl("",
        [
          Validators.required,
          Validators.pattern(/^([2-5]|[2-5]{1}[\.\,]{1}[0-9]{1,2})?$/),
        ],
      )
    });

    this.subs = this.simpleService.activateEditing$.subscribe((activateEditing) => this.activateEditing = activateEditing);
    this.subs = this.simpleService.studentsList$.subscribe((studentsList) => this.studentsList = studentsList);

    this.subs = this.simpleService.activateOfAdd$.subscribe((activateOfAdd) => this.activateOfAdd = activateOfAdd);

    this.subs = this.simpleService.student$.subscribe((student) => {
      this.student = student;

      this.formModelEditStudent.get("fullName").patchValue({
        lastName: this.student.lastName,
        firstName: this.student.firstName,
        patronymic: this.student.patronymic
      });
      this.formModelEditStudent.patchValue({
        DOB: this.student.DOB,
        GPA: this.student.GPA
      });
    });

    this.subs = this.simpleService.resetTable$.subscribe(() => {
      this.activateEditing = false;
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formModelEditStudent.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  isControlInvalidFormAdd(controlName: string): boolean {
    const control = this.formModelAddingStudent.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  get _DOB(): AbstractControl {
    return this.formModelEditStudent.get("DOB");
  }

  get _GPA(): AbstractControl {
    return this.formModelEditStudent.get("GPA");
  }

  get _DOBadd(): AbstractControl {
    return this.formModelAddingStudent.get("DOB");
  }

  get _GPAadd(): AbstractControl {
    return this.formModelAddingStudent.get("GPA");
  }

  get _fullName(): AbstractControl {
    return this.formModelEditStudent.get("fullName");
  }

  get _fullNameAdd(): AbstractControl {
    return this.formModelAddingStudent.get("fullName");
  }

  onSubmitEditForm(): void {
    const controls = this.formModelEditStudent.controls;

    if (this.formModelEditStudent.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    const FMES = this.formModelEditStudent.value;
    const editedStudent = {
      lastName: FMES.fullName.lastName,
      firstName: FMES.fullName.firstName,
      patronymic: FMES.fullName.patronymic,
      DOB: FMES.DOB,
      GPA: FMES.GPA,
    };

    this.SL.studentEditing(this.student, editedStudent, this.studentsList);
    this.successfully = true;

    setTimeout(() => {
      this.activateEditing = false;
      this.successfully = false;
    }, 800);
  }

  onSubmitAddForm(): void {
    const controls = this.formModelAddingStudent.controls;

    if (this.formModelAddingStudent.invalid) {
      Object.keys(controls)
        .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    const modelAdd = this.formModelAddingStudent.value;
    const addStudent = {
      lastName: modelAdd.fullName.lastName,
      firstName: modelAdd.fullName.firstName,
      patronymic: modelAdd.fullName.patronymic,
      DOB: modelAdd.DOB,
      GPA: modelAdd.GPA,
    };

    this.SL.studentAdd(addStudent, this.studentsList);
    this.successfully = true;

    setTimeout(() => {
      this.activateOfAdd = false;
      this.successfully = false;
    }, 800);
  }
}
