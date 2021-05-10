import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ActivatedRoute, Params } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { dateValidator } from "../../../../validators/date.validator";
import { fullNameValidator } from "../../../../validators/full-name.validator";
import { SimpleService } from "../../../simple.service";
import { Student, StudentList } from "../../../student-list";

@Component({
  selector: "app-add-and-edit-form",
  templateUrl: "./add-and-edit-form.component.html",
  styleUrls: ["./add-and-edit-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAndEditFormComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  activateEditing: boolean;
  activateForm: boolean;
  activateOfAdd: boolean;
  SL = new StudentList();
  student: Student;
  selectedStudent: Student;
  studentsList: Student[];
  successfully = false;
  id: number;

  editingAccess = true;

  titleForm: string;
  titleButton: string;

  fullName: AbstractControl;

  formModelStudent: FormGroup;

  constructor(
    private readonly simpleService: SimpleService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {
    this.id = route.snapshot.params["id"];
  }


  ngOnInit(): void {
    this.formModelStudent = new FormGroup({
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

    this.subs = this.simpleService.activateEditing$.subscribe((activateEditing) => {
      this.formModelStudent.reset();
      this.activateForm = activateEditing;
      this.activateEditing = activateEditing;
      this.titleForm = "Редактирование записи";
      this.titleButton = "Изменить";

      this.editingAccess = activateEditing;
      this.cd.detectChanges();
    });

    this.subs = this.simpleService.studentsList$.subscribe((studentsList) => {
      this.id = this.route.snapshot.params["id"];
      this.studentsList = studentsList;
      for (const value of this.studentsList) {
        if (value.id == this.id) {
          this.selectedStudent = value;

          this.formModelStudent.get("fullName").patchValue({
            lastName: this.selectedStudent.lastName,
            firstName: this.selectedStudent.firstName,
            patronymic: this.selectedStudent.patronymic
          });

          this.formModelStudent.patchValue({
            DOB: this.selectedStudent.DOB,
            GPA: this.selectedStudent.GPA
          });
          this.cd.detectChanges();
        }
      }
    });

    if (this.id) {
      this.formModelStudent.reset();
      this.activateForm = true;
      this.activateEditing = true;
      this.titleForm = "Редактирование записи";
      this.titleButton = "Изменить";

      this.studentsList = this.SL.returnNormalSL();

      for (const value of this.studentsList) {
        if (value.id == this.id) {
          this.selectedStudent = value;

          this.formModelStudent.get("fullName").patchValue({
            lastName: this.selectedStudent.lastName,
            firstName: this.selectedStudent.firstName,
            patronymic: this.selectedStudent.patronymic
          });

          this.formModelStudent.patchValue({
            DOB: this.selectedStudent.DOB,
            GPA: this.selectedStudent.GPA
          });
          this.cd.detectChanges();
        }
      }
    }

    this.subs = this.simpleService.activateOfAdd$.subscribe((activateOfAdd) => {
      this.formModelStudent.reset();
      this.activateForm = activateOfAdd;
      this.activateOfAdd = activateOfAdd;
      this.titleForm = "Добавления новой записи";
      this.titleButton = "Добавить";

      this.editingAccess = activateOfAdd;
      this.cd.detectChanges();
    });

    // this.subs = this.simpleService.student$.subscribe((student) => {
    //   this.student = student;
    //
    //   this.formModelStudent.get("fullName").patchValue({
    //     lastName: this.student.lastName,
    //     firstName: this.student.firstName,
    //     patronymic: this.student.patronymic
    //   });
    //
    //   this.formModelStudent.patchValue({
    //     DOB: this.student.DOB,
    //     GPA: this.student.GPA
    //   });
    //   this.cd.detectChanges();
    // });

    this.subs = this.simpleService.resetTable$.subscribe(() => {
      this.formModelStudent.reset();
      this.activateEditing = false;
      this.activateOfAdd = false;
      this.activateForm = false;
    });

    this.subs = this.simpleService.editingAccess$.subscribe((editingAccess) => {
      setTimeout(() => {
        this.editingAccess = editingAccess;
        this.formModelStudent.reset();
        this.activateEditing = false;
        this.activateOfAdd = false;
        this.activateForm = false;
        this.cd.detectChanges();
      }, 1);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formModelStudent.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

  get _fullName(): AbstractControl {
    return this.formModelStudent.get("fullName");
  }

  get _DOB(): AbstractControl {
    return this.formModelStudent.get("DOB");
  }

  get _GPA(): AbstractControl {
    return this.formModelStudent.get("GPA");
  }

  // onSubmitEditForm(): void {
  //   const controls = this.formModelEditStudent.controls;
  //
  //   if (this.formModelEditStudent.invalid) {
  //     Object.keys(controls)
  //       .forEach(controlName => controls[controlName].markAsTouched());
  //     return;
  //   }
  //
  //   const FMES = this.formModelEditStudent.value;
  //   const editedStudent = {
  //     lastName: FMES.fullName.lastName,
  //     firstName: FMES.fullName.firstName,
  //     patronymic: FMES.fullName.patronymic,
  //     DOB: FMES.DOB,
  //     GPA: FMES.GPA,
  //   };
  //
  //   this.SL.studentEditing(this.student, editedStudent, this.studentsList);
  //   this.successfully = true;
  //
  //   setTimeout(() => {
  //     this.activateEditing = false;
  //     this.successfully = false;
  //   }, 800);
  // }
  //
  // onSubmitAddForm(): void {
  //   const controls = this.formModelAddingStudent.controls;
  //
  //   if (this.formModelAddingStudent.invalid) {
  //     Object.keys(controls)
  //       .forEach(controlName => controls[controlName].markAsTouched());
  //     return;
  //   }
  //
  //   const modelAdd = this.formModelAddingStudent.value;
  //   const addStudent = {
  //     lastName: modelAdd.fullName.lastName,
  //     firstName: modelAdd.fullName.firstName,
  //     patronymic: modelAdd.fullName.patronymic,
  //     DOB: modelAdd.DOB,
  //     GPA: modelAdd.GPA,
  //   };
  //
  //   this.SL.studentAdd(addStudent, this.studentsList);
  //   this.successfully = true;
  //
  //   setTimeout(() => {
  //     this.activateOfAdd = false;
  //     this.successfully = false;
  //   }, 800);
  // }

  onSubmitForm(): void {
    if (this.activateEditing) {
      const controls = this.formModelStudent.controls;

      if (this.formModelStudent.invalid) {
        Object.keys(controls)
          .forEach(controlName => controls[controlName].markAsTouched());
        return;
      }

      const FMES = this.formModelStudent.value;
      const n = 1;
      const editedStudent: Student = {
        id: this.student.id,
        lastName: FMES.fullName.lastName,
        firstName: FMES.fullName.firstName,
        patronymic: FMES.fullName.patronymic,
        DOB: FMES.DOB,
        GPA: FMES.GPA,
      };

      this.SL.studentEditing(this.student, editedStudent, this.studentsList);
      console.log(this.studentsList[0]);
      this.successfully = true;
    }

    function getMaxOfArray(numArray: number[]): number {
      return Math.max.apply(null, numArray);
    }

    if (this.activateOfAdd) {
      const controls = this.formModelStudent.controls;

      if (this.formModelStudent.invalid) {
        Object.keys(controls)
          .forEach(controlName => controls[controlName].markAsTouched());
        return;
      }

      const modelAdd = this.formModelStudent.value;
      const arrId = [];
      for (const value of this.studentsList) {
        arrId.push(value.id);
      }
      const addStudent = {
        id: getMaxOfArray(arrId) + 1,
        lastName: modelAdd.fullName.lastName,
        firstName: modelAdd.fullName.firstName,
        patronymic: modelAdd.fullName.patronymic,
        DOB: modelAdd.DOB,
        GPA: modelAdd.GPA,
      };

      this.SL.studentAdd(addStudent, this.studentsList);
      this.successfully = true;
    }

    setTimeout(() => {
      this.activateOfAdd = false;
      this.activateEditing = false;
      this.successfully = false;

      this.activateForm = false;
      this.cd.detectChanges();
      // this.formModelStudent.reset();
    }, 800);

  }
}
