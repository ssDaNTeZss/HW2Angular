import { Component, OnDestroy, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { SimpleService } from "../simple.service";
import { dateValidator } from "../../validators/date.validator";

@Component({
  selector: "app-add-and-edit",
  templateUrl: "./add-and-edit.component.html",
  styleUrls: ["./add-and-edit.component.css"]
})
export class AddAndEditComponent implements OnInit, OnDestroy {
  private subs: Subscription;

  activateEditing: boolean;
  student: any = [];

  formModelEditStudent: FormGroup;

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
            Validators.pattern(/^([А-Я]{1}[а-яё\-]{1,23}|[A-Z]{1}[a-z\-]{1,23})?$/ )
          ]
        ),
        firstName: new FormControl("",
          [
            Validators.required,
            Validators.pattern(/^([А-Я]{1}[а-яё\-]{1,23}|[A-Z]{1}[a-z\-]{1,23})?$/ )
          ]
        ),
        patronymic: new FormControl("")
      }),
      DOB: new FormControl("", Validators.required),
      GPA: new FormControl("",
        [
          Validators.required,
          Validators.pattern(/^([2-5]|[2-5]{1}[\.\,]{1}[0-9]{1,2})?$/ )
          ]
      )
    });

    this.subs = this.simpleService.activateEditing$.subscribe((activateEditing) => this.activateEditing = activateEditing);

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
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onSubmitEditForm(): void {

  }
}
